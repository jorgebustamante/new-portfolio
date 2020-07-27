import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div className="lg:w-1/2 w-full flex flex-col overflow-hidden">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
