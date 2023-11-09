import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import FooterCol from "./FooterCol";

function Footer() {
  return (
    <footer id="footer" className="border-t border-lightGreyPurple py-24 px-6">
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <FooterCol title="Resources">
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-thin hover:text-mainPurple transition ease-in-out duration-200"
                >
                  Github repository
                </a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol title="About">
            Hi! I&apos;m{" "}
            <a
              href="https://www.linkedin.com/in/david-de-alencar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mainPurple transition ease-in-out duration-200"
            >
              David de Alencar
            </a>
            , a react front-end developer and this project is part of my
            portfolio.
          </FooterCol>
        </div>
        <div className=" text-center flex flex-col gap-6 items-center justify-center w-2/3">
          <a href="#">
            <img
              src="../assets/logo.png"
              className="w-32"
              alt="CurrencyConverter Logo"
            />
          </a>
          <nav>
            <ul className="flex gap-4 text-lg text-darkPurple">
              <li>
                <a href="#" className="hover:text-mainPurple">
                  <CiInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mainPurple">
                  <CiFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mainPurple">
                  <CiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/david-de-alencar"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mainPurple"
                >
                  <CiLinkedin />
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-xs font-thin">
            {" "}
            CurrencyConverter uses data from{" "}
            <a
              href="https://www.frankfurter.app/"
              className="hover:text-mainPurple"
            >
              FrankFurterAPI
            </a>
          </p>
          <p className="text-xs font-thin">
            Copyright © 2023 by CurrencyConverter, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
