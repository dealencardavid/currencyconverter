import { useConverter } from "../../context/ConverterContext";
import { formatCurrency } from "../../utilities/helpers";

function ConverterHistory() {
  const { conversions } = useConverter();

  return (
    <div className="hidden lg:flex bg-white max-h-60 overflow-y-auto rounded-xl shadow-xl col-span-2 gap-6 flex-col pb-4">
      <div className="bg-lightGreyPurple pt-4 pb-3 self-stretch shadow-purpleFrame rounded-t-xl border-b-[0.5px] border-darkGreyPurple grid grid-cols-6 text-center items-center text-xs font-rubik uppercase text-darkGreyPurple">
        <p className="">Date</p>
        <p className="">From &rarr; To</p>
        <p className="">Exchange Rate</p>
        <p className="">Amount</p>
        <p className="">Fee</p>
        <p className="">Converted</p>
      </div>
      {conversions.length === 0
        ? ""
        : conversions
            .sort((a, b) => b.id - a.id)
            .map((conversion) => (
              <div
                key={conversion.date}
                className="h-8 self-stretch grid grid-cols-6 text-center items-center text-xs text-darkGreyPurple"
              >
                <p className="">{conversion.date}</p>
                <p className="">{`${conversion.from} to ${conversion.to} `}</p>
                <p className="">{`1 ${conversion.from} = ${Number(
                  conversion.rate
                ).toFixed(4)} ${conversion.to}`}</p>
                <p className="">
                  {formatCurrency(conversion.amount, conversion.from)}
                </p>
                <p className="">
                  {formatCurrency(conversion.amount, conversion.from)}
                </p>
                <p className="">
                  {" "}
                  {formatCurrency(conversion.convertedAmount, conversion.to)}
                </p>
              </div>
            ))}
    </div>
  );
}

export default ConverterHistory;
