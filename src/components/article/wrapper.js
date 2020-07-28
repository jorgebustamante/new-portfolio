import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div className="max-w-3xl w-full flex flex-col overflow-hidden justify-around mx-auto px-3">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
