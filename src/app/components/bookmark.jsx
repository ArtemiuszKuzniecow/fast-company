import React from "react";

const BookMark = ({ status }) => {
  if (status === true) {
    return <i className="bi bi-bookmark-heart-fill"></i>;
  } else {
    return <i className="bi bi-bookmark"></i>;
  }
};

export default BookMark;
