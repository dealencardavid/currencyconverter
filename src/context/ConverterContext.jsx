import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { formatDate } from "../utilities/helpers";

const API_URL = `https://api.frankfurter.app`;

const ConverterContext = createContext();

const initialState = {
  currencies: [],
  conversions: [],
  currentConversion: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "currencies/loaded":
      return { ...state, currencies: action.payload };
    case "conversions/loaded":
      return {
        ...state,
        isLoading: false,
        conversions: action.payload,
      };
    case "conversions/clear":
      return {
        ...state,
        conversions: [],
      };
    case "conversion/created":
      return { ...state, currentConversion: action.payload };
    case "conversion/registered":
      return {
        ...state,
        isLoading: false,
        conversions: [...state.conversions, action.payload],
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknow action type.");
  }
}

function ConverterProvider({ children }) {
  // Initial State
  const [
    { currencies, conversions, currentConversion, isLoading, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Form state
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [feePercentage, setFeePercentage] = useState(0.01);
  const [historicData, setHistoricData] = useState([]);

  // LOCAL STORAGE
  // Fetch prior history of conversions from Local Storage
  useEffect(function () {
    function fetchConversions() {
      const storedState = localStorage.getItem("CONVERTER_STORED_HISTORY");
      if (storedState) {
        dispatch({
          type: "conversions/loaded",
          payload: JSON.parse(storedState),
        });
      }
    }
    fetchConversions();
  }, []);

  // Update Local Storage with most recent registered conversion
  useEffect(
    function () {
      if (conversions.length === 0) return;
      function storeState() {
        localStorage.setItem(
          "CONVERTER_STORED_HISTORY",
          JSON.stringify(conversions)
        );
      }
      storeState();
    },
    [conversions]
  );

  // API CALL -  FRANKFURTER API
  // Fetch currencies to use as options on the form
  useEffect(function () {
    async function fetchCurrencies() {
      try {
        const res = await fetch(`${API_URL}/currencies`);
        const data = await res.json();
        dispatch({ type: "currencies/loaded", payload: Object.entries(data) });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: error,
        });
      }
    }
    fetchCurrencies();
  }, []);

  // Fetch historical data for the chart
  useEffect(
    function () {
      if (fromCurrency === "") return;
      if (toCurrency === "") return;
      if (fromCurrency === toCurrency) return;
      async function fetchHistorical() {
        try {
          const res = await fetch(
            `${API_URL}/2020-01-01..?from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();
          const historicArray = Object.keys(data.rates).map((date) => ({
            date,
            ...data.rates[date],
          }));
          setHistoricData(historicArray);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchHistorical();
    },
    [fromCurrency, toCurrency]
  );

  // Function to call the api, do the conversion and store in the currentConversion property of initialState
  useEffect(
    function () {
      if (
        !fromCurrency ||
        !toCurrency ||
        Number(amount) === 0 ||
        !amount ||
        fromCurrency === toCurrency
      )
        return;

      async function fetchRates() {
        try {
          const res = await fetch(
            `${API_URL}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();
          const convertedAmount = data.rates[toCurrency];
          const newConversion = {
            id: conversions.length + 1,
            date: formatDate(new Date().toISOString()),
            from: fromCurrency,
            to: toCurrency,
            rate: convertedAmount / amount,
            amount: amount,
            fee: feePercentage * amount,
            convertedAmount: convertedAmount + feePercentage * amount,
          };
          dispatch({ type: "conversion/created", payload: newConversion });
        } catch (error) {
          dispatch({
            type: "rejected",
            payload: "There was an error creating the new conversion object.",
          });
        }
      }
      fetchRates();
    },
    [
      dispatch,
      fromCurrency,
      toCurrency,
      amount,
      conversions.length,
      feePercentage,
    ]
  );

  // INITIALSTATE MANIPULATION
  // store currentConversion in the conversions array
  function registerConversion(newConversion) {
    dispatch({ type: "conversion/registered", payload: newConversion });
  }

  // clear conversions array
  function clearConversionHistory() {
    dispatch({ type: "conversions/clear" });
  }

  return (
    <ConverterContext.Provider
      value={{
        currencies,
        conversions,
        currentConversion,
        isLoading,
        registerConversion,
        clearConversionHistory,
        error,
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        amount,
        setAmount,
        feePercentage,
        setFeePercentage,
        historicData,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
}

function useConverter() {
  const context = useContext(ConverterContext);
  if (context === undefined)
    throw new Error("ConverterContext was used outside the ConverterProvider");
  return context;
}

export { ConverterProvider, useConverter };
