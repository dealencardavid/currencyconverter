import { formatCurrency } from "../../utilities/helpers";
import {
  HiOutlineSwitchHorizontal,
  HiOutlineSwitchVertical,
} from "react-icons/hi";

import { useConverter } from "../../context/ConverterContext";

function ConverterCalculator() {
  // Context
  const {
    currencies,
    currentConversion,
    registerConversion,
    clearConversionHistory,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    feePercentage,
    setFeePercentage,
  } = useConverter();

  // Derived State
  const formatedAmount = fromCurrency && formatCurrency(amount, fromCurrency);
  const formatedFee =
    fromCurrency && formatCurrency(feePercentage * amount, fromCurrency);
  const outcome =
    toCurrency && formatCurrency(currentConversion.convertedAmount, toCurrency);

  // HANDLERS
  function handleSwitch() {
    // Temporary variables to hold the values
    const tempFromCurrency = toCurrency;
    const tempToCurrency = fromCurrency;

    // State is updated using temp values
    setFromCurrency(tempFromCurrency);
    setToCurrency(tempToCurrency);
  }

  function handleAmountInput(e) {
    // Assign to a variable
    let input = e.target.value;
    // Test to invalidate inputs below 0 and above 100.000.000
    if (input < 0) input = 0;
    if (input > 1000000000) input = 1000000000;
    // Set state
    setAmount(input);
  }

  function handleRegister() {
    registerConversion(currentConversion);
  }

  function handleClearHistory() {
    clearConversionHistory();
  }

  return (
    //   HIGHEST ORDER CONTAINER
    <div className="col-span-2 flex flex-col bg-white rounded-xl shadow-xl px-8 py-12 gap-6 lg:col-span-1 lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-14 relative">
      {/* First Select Input - fromCurrency */}
      <div className={`flex flex-col gap-0 w-full lg:mx-auto`}>
        <label
          htmlFor="from"
          className="flex items-center gap-1 text-mainPurple"
        >
          From
        </label>
        <select
          id="from"
          name="from"
          value={fromCurrency}
          className="border-[0.5px] border-darkPurple rounded-md px-2 py-1 text-base text-darkPurple"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value=""></option>
          {currencies.map((option) => (
            <option value={option.at(0)} key={option.at(0)}>
              {option.at(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        className="text-2xl text-white mx-auto  bg-mainPurple w-fit h-10 p-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 active:shadow-sm active:scale-95   transition-all duration-150 ease-in-out motion-safe lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-16"
        onClick={handleSwitch}
      >
        <HiOutlineSwitchVertical className="lg:hidden" />
        <HiOutlineSwitchHorizontal className="hidden lg:block" />
      </button>
      {/* Second Select Input - toCurrency */}
      <div className={`flex flex-col gap-0 w-full lg:mx-auto`}>
        <label htmlFor="to" className="flex items-center gap-1 text-mainPurple">
          To
        </label>
        <select
          id="to"
          name="to"
          value={toCurrency}
          className="border-[0.5px] border-darkPurple rounded-md px-2 py-1 text-base text-darkPurple"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value=""></option>
          {currencies.map((option) => (
            <option value={option.at(0)} key={option.at(0)}>
              {option.at(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Third Input - setAmount */}
      <div className={`flex flex-col gap-0 w-full lg:mx-auto`}>
        <label
          htmlFor="amount"
          className="flex items-center gap-1 text-mainPurple"
        >
          Amount
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={amount}
          min={0}
          className="border-[0.5px] border-darkPurple rounded-md px-2 py-1 text-base text-darkPurple"
          onChange={handleAmountInput}
        />
      </div>
      {/* Fourth Input - setFee */}
      <div className={`flex flex-col gap-0 w-32`}>
        <label
          htmlFor="fee"
          className="flex items-center gap-1 text-mainPurple"
        >
          Expected Fee
        </label>
        <select
          id="fee"
          name="fee"
          value={feePercentage}
          className="border-[0.5px] border-darkPurple rounded-md px-2 py-1 text-base text-darkPurple"
          onChange={(e) => setFeePercentage(e.target.value)}
        >
          <option value={0.01}>1%</option>
          <option value={0.02}>2%</option>
          <option value={0.03}>3%</option>
          <option value={0.04}>4%</option>
        </select>
      </div>

      {/* Final Input - setConvertedAmount */}
      <div className="flex flex-col gap-1 lg:col-span-2">
        <label htmlFor="outcome" className="text-mainPurple">
          {Number(amount) === 0 ||
          !fromCurrency ||
          !toCurrency ||
          fromCurrency === toCurrency
            ? `Your conversion`
            : `${formatedAmount} equals to  (with a fee of ${formatedFee})`}
        </label>
        <input
          id="outcome"
          name="outcome"
          value={
            Number(amount) === 0 ||
            !fromCurrency ||
            !toCurrency ||
            fromCurrency === toCurrency
              ? `Input values`
              : `${outcome}`
          }
          className="border-[0.5px]  border-darkPurple rounded-md px-2 py-1 font-semibold text-lg text-darkGreyPurple shadow-md"
          readOnly
        ></input>
      </div>
      <div className="hidden border-b-[0.5px] w-1/2 border-dashed border-darkPurple self-center lg:col-span-2 lg:mx-auto lg:inline"></div>

      <button
        className="hidden lg:flex justify-center items-center uppercase tracking-wide font-semibold text-white bg-mainPurple w-full h-10 p-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 active:shadow-sm active:scale-95 transition-all duration-300 ease-in-out lg:col-span-2 lg:w-2/3 lg:mx-auto"
        onClick={handleRegister}
      >
        Register
      </button>
      <button
        className="hidden lg:flex justify-center items-center uppercase tracking-wide border border-darkPurple text-darkPurple  w-full h-10 p-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 active:shadow-sm active:scale-95 transition-all duration-300 ease-in-out lg:col-span-2 lg:w-2/3 lg:mx-auto"
        onClick={handleClearHistory}
      >
        Clear history
      </button>
    </div>
  );
}

export default ConverterCalculator;
