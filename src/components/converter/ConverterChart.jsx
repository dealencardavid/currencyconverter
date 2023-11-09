import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useConverter } from "../../context/ConverterContext";

function ConverterChart() {
  const { historicData, fromCurrency, toCurrency } = useConverter();

  return (
    <div className="hidden lg:inline-block bg-white rounded-xl shadow-xl px-3 py-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={700} data={historicData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" hide={true} />
          <YAxis hide={true} />
          <Tooltip />
          <Legend
            content={
              <RenderLegend>
                {fromCurrency && toCurrency
                  ? `1 ${fromCurrency} equals to (YTD variation)`
                  : "Input currencies"}
              </RenderLegend>
            }
            verticalAlign="top"
          />
          <Line
            type="monotone"
            dot={false}
            dataKey={toCurrency}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ConverterChart;

const RenderLegend = ({ children }) => {
  return <h3 className="text-mainPurple text-center mb-4">{children}</h3>;
};
