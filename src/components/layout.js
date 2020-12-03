import React from "react";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import '../css/style.css'

function Layout({ children }) {
  const animationProps = useSpring({
    config: { duration: 750 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <div className="bg-yellow-50">
      <div className="flex flex-col font-sans min-h-screen text-ink max-w-6xl mx-auto">
        <Header />
        <animated.div className="px-4 md:px-12" style={animationProps}>{children}</animated.div>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
