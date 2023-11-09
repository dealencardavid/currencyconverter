import SectionHeading from "./SectionHeading";
import Section from "./Section";
import ConverterHistory from "./converter/ConverterHistory";
import ConverterChart from "./converter/ConverterChart";
import ConverterCalculator from "./converter/ConverterCalculator";

function Converter() {
  return (
    <Section bgColor="" id="app">
      <SectionHeading
        tag="the app"
        title="Simulate your next conversion"
        position=""
      />
      <div className="container lg:max-w-6xl mx-auto px-12 sm:max-w-md">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 mx-auto">
          <ConverterCalculator />
          <ConverterChart />
          <ConverterHistory />
        </div>
      </div>
    </Section>
  );
}

export default Converter;
