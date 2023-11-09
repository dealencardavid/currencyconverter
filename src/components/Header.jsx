import { CiMenuBurger } from "react-icons/ci";
import BtnCta from "./BtnCta";

function Header() {
  return (
    <header className="bg-lightGreyPurple z-20 h-16 w-full px-8 flex justify-between items-center fixed shadow-sm xs:px-8 sm:px-12 md:px-16 lg:px-24 transition ease-in-out duration-200">
      <a href="#">
        <img
          src="../assets/logo.png"
          alt="CurrencyConverter logo"
          className="w-36"
        />
      </a>

      <a className="text-2xl md:hidden">
        <CiMenuBurger />
      </a>
      <nav className="hidden md:inline">
        <ul className="flex gap-6">
          <li className="group flex flex-col items-center">
            <a
              href="#hero"
              className="capitalize font-semibold text-darkPurple group-hover:text-mediumPurple"
            >
              Home
            </a>
            <div className="w-2/3 h-[1px] bg-mediumPurple transform origin-left scale-x-0 transition ease-in-out duration-300 group-hover:scale-x-100"></div>
          </li>
          <li className="group flex flex-col items-center">
            <a
              href="#how-it-works"
              className="capitalize font-semibold text-darkPurple group-hover:text-mediumPurple"
            >
              How it works
            </a>
            <div className="w-2/3 h-[1px] bg-mediumPurple transform origin-left scale-x-0 transition ease-in-out duration-300 group-hover:scale-x-100"></div>
          </li>
          <li className="group flex flex-col items-center">
            <a
              href="#footer"
              className="capitalize font-semibold text-darkPurple group-hover:text-mediumPurple"
            >
              About
            </a>
            <div className="w-2/3 h-[1px] bg-mediumPurple transform origin-left scale-x-0 transition ease-in-out duration-300 group-hover:scale-x-100"></div>
          </li>

          <li>
            <BtnCta type="primary" href="#app">
              To the app
            </BtnCta>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
