import React from "react";
import PropTypes from "prop-types";

const Row = ({children}) => {
  return (
      <div className="flex flex-col overflow-hidden ARTICLEROW w-full py-8">
        {children}
      </div>
  );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Row;