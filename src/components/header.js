import { Link } from "gatsby";
import React, { useState } from "react";
import { HamburgerSqueeze } from "react-animated-burgers";
import "../css/style.css";
const Header = () => {
  const [isActive, toggleButton] = useState(false);

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
            <HamburgerSqueeze
              className="z-20 p-0 straight"
              buttonStyle={{ padding: "0px" }}
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? "#2D3748" : "#2D3748"}
            />
          </div>

          <ul className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-lg w-full md:w-auto mr-0">
            {[
              { title: "Home", route: "/" },
              {title: "My Work", route: "/#Cases"},
              { title: "Projects", route: "/projects" },
              { title: "Art", route: "/art" },
              { title: "About Me", route: "/about" },

            ].map((navigationItem) => (
              <Link
                activeClassName="font-bold border-b-2 border-red-600"
                className="mt-3 md:mt-0 md:ml-6 text-red-700 opensans"
                key={navigationItem.title}
                to={navigationItem.route}
              >
                <p className="block text-gray-900 josefin">
                  {navigationItem.title}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </header>
      <div
        className={`${
          isActive ? `true` : `false`
        } fixed bg-white h-screen w-full flex flex-col top-0 md:hidden lg:hidden z-10`}
        id="SideMenu"
      >
        <ul className="flex flex-col mt-16">
          {[
            { title: "Home", route: "/" },
            {title: "My Work", route: "/#Cases"},
            { title: "Projects", route: "/#Projects" },
            { title: "Art", route: "/art" },
            { title: "About Me", route: "/about" },
          ].map((navigationItem) => (
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
        </ul>
      </div>
    </>
  );
};

export default Header;
