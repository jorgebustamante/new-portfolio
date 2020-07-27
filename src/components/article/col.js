import React from "react";
import PropTypes from "prop-types";

const Col = ({children}) => {
  return (
    <div className="w-full py-8 ARTICLECOL" >
      <div className="flex flex-col w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

Col.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Col;