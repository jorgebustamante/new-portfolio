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
            href="https://www.linkedin.com/in/paulie-rodriguez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/paulie-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
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
          I built this website with React/Gatsby.js, TailwindCSS, PostCSS,
          MDX.js, react-spring and deploy via netlify.
        </p>
        <p className="mx-auto josefin text-lg text-blue-800">
          Don&apos;t you know I love that JAMstack?
        </p>
      </div>
    </footer>
  );
};
export default Footer;
