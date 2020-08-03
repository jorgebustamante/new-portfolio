import { Link } from "gatsby";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "../css/style.css";
const Header = () => {
  const [isActive, toggleButton] = useState(false);
  const LinkArr = [
    { title: "Home", route: "/" },
    { title: "My Work", route: "/#Cases" },
    { title: "Projects", route: "/projects" },
    { title: "Art", route: "/art" },
    { title: "About Me", route: "/about" },
  ];

  return (
    <>
      <header className="m-0">
        <div className="flex flex-wrap md:flex-no-wrap items-center justify-between py-6">
          <div className="flex items-center">
            <Link to="/" className="">
              <p className="yeseva leading-none heaviest text-4xl text-red-600">
                PR
              </p>
            </Link>
          </div>
          <div className="block md:hidden flex rounded-none">
            <div className="z-20">
              <Hamburger
                toggle={() => toggleButton(!isActive)}
                toggled={isActive}
                aria-label="Menu button"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-lg w-full md:w-auto mr-0">
            {LinkArr.map((navigationItem) => (
              <Link
                activeClassName="font-bold border-b-2 border-red-600"
                className="mt-3 md:mt-0 md:ml-6 text-red-700 opensans"
                key={navigationItem.title}
                to={navigationItem.route}
              >
                <p className="block text-blue-900 josefin">
                  {navigationItem.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </header>
      <div
        className={`${
          isActive ? `true` : `false`
        } fixed bg-white h-screen w-full flex flex-col top-0 md:hidden lg:hidden z-10`}
        id="SideMenu"
      >
        <div className="flex flex-col mt-16">
          {LinkArr.map((navigationItem) => (
            <div
              className="mt-3 md:mt-0 md:ml-6"
              key={navigationItem.title + "side"}
            >
              <Link
                activeClassName="font-bold border-b-2 border-red-600"
                to={navigationItem.route}
                onClick={() => toggleButton(!isActive)}
              >
                <p className="text-blue-900 block ml-4 text-2xl josefin">
                  {navigationItem.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
