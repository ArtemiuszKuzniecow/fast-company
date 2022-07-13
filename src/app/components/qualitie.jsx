import React from "react";

const Qualitie = ({ qualities }) => {
  return Array.isArray(qualities) ? (
    qualities.map((quality) => {
      return (
        <span className={"badge m-1 bg-" + quality.color} key={quality.name}>
          {quality.name}
        </span>
      );
    })
  ) : (
    <span>{qualities.name}</span>
  );
};

export default Qualitie;
