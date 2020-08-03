import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div id='WRAPPER' className="max-w-4xl w-full flex flex-col overflow-hidden mx-auto self-center">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
