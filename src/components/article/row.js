import React from "react";
import PropTypes from "prop-types";

const Row = ({children}) => {
  return (
    <div className="w-full py-8 ARTICLEROW" >
      <div className="flex lg:flex-row flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Row;