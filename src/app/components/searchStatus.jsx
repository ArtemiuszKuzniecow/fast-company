import React from "react";

const SearchStatus = ({ length }) => {
  let phrase;
  let bgColor;
  if (length >= 2 && length <= 4) {
    phrase = length + " человека туснут с тобой сегодня";
    bgColor = "bg-primary";
  } else if (length === 0) {
    phrase = "Никто с тобой не тусанёт";
    bgColor = "bg-danger";
  } else {
    phrase = length + " человек туснёт с тобой сегодня";
    bgColor = "bg-primary";
  }
  return (
    <h2>
      <span className={"badge m-2 " + bgColor}>{phrase}</span>
    </h2>
  );
};

export default SearchStatus;
