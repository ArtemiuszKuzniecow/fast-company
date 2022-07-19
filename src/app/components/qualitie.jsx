import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ qualities }) => {
  return qualities.map((quality) => {
    return (
      <span className={"badge m-1 bg-" + quality.color} key={quality.name}>
        {quality.name}
      </span>
    );
  });
};

Qualitie.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default Qualitie;
