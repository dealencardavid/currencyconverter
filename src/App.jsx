import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Converter from "./components/Converter";
import Footer from "./components/Footer";
import { ConverterProvider } from "./context/ConverterContext";

function App() {
  return (
    <ConverterProvider>
      <div>
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Converter />
        </main>
        <Footer />
      </div>
    </ConverterProvider>
  );
}

export default App;
