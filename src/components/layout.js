import React from "react";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

function Layout({ children }) {
  const animationProps = useSpring({
    config: { duration: 750 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
      <animated.div
        className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100"
        style={animationProps}
      >
        <Header />
        {children}
        <Footer />
      </animated.div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
