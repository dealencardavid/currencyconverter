import BtnCta from "./BtnCta";

function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center overflow-hidden relative"
      id="hero"
    >
      <img
        src="../assets/purpleRect.png"
        className="absolute top-0 right-0 max-w-4xl hidden xl:block"
      />
      {/* Content Container */}
      <div className=" max-w-6xl flex-1 relative">
        <div className="px-6 flex flex-col gap-6 text-center xl:text-left">
          <h1 className="font-rubik text-6xl leading-none font-bold text-darkPurple md:text-7xl">
            CURRENCY <br /> CONVERTER
          </h1>
          <p className=" text-md font-light text-darkPurple md:text-lg">
            The fastest and easiest way to simulate your currency exchanges
          </p>
          <div className="flex gap-5 justify-center xl:justify-start">
            <BtnCta type="primary" href="#app">
              To the app
            </BtnCta>
            <BtnCta type="secondary" href="#how-it-works">
              Learn more
            </BtnCta>
          </div>
        </div>
        <img
          src="../assets/illustration.png"
          alt="Business Illustration"
          className="hidden xl:inline-block absolute -top-36 -right-8 w-1/2 rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
