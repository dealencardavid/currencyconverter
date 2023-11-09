import {
  CiCalculator2,
  CiCoinInsert,
  CiDollar,
  CiPercent,
} from "react-icons/ci";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import Section from "./Section";

function HowItWorks() {
  return (
    <Section bgColor="bg-greyPurple" id="how-it-works">
      <SectionHeading
        tag="how it works"
        title="As simples as it gets"
        position="text-center"
      />
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:max-w-6xl xl:gap-8">
        <Card icon={<CiCoinInsert />} title="Choose your currencies">
          Select the currencies and amount you plan to exchange
        </Card>
        <Card icon={<CiCalculator2 />} title="Input the amount">
          Select the currencies and amount you plan to exchange
        </Card>
        <Card icon={<CiPercent />} title="Select expected fee">
          Select the currencies and amount you plan to exchange
        </Card>
        <Card icon={<CiDollar />} title="Save your money">
          Select the currencies and amount you plan to exchange
        </Card>
      </div>
    </Section>
  );
}

export default HowItWorks;
