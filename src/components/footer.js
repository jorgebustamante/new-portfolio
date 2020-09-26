import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white josefin border-t-2 border-red-600">
      <nav className="flex flex-col max-w-6xl mx-auto py-4 md:py-8 text-base text-blue-600">
        <div className="flex flex-col font-bold">
          <p className="text-xl font-bold josefin text-blue-900">
            Contact:
          </p>
          <a
            href="mailto:paulie.j.rodriguez@gmail.com?Subject=Hey!"
            target="_top"
          >
            Paulie.j.rodriguez@gmail.com
          </a>
        </div>
      </nav>
      <div className="w-full py-8 flex flex-col text-center">
        <p className="mx-auto josefin text-lg text-blue-800">
          Please only email me if you have music recomendations.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
