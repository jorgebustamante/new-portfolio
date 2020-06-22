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
      <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100">
        <Header />
        <animated.div style={animationProps}>{children}</animated.div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
