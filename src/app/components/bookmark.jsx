import React from "react";

const BookMark = ({ status }) => {
  const setBookmark = (status) => {
    if (status === true) {
      return <i className="bi bi-bookmark-heart-fill"></i>;
    } else {
      return <i className="bi bi-bookmark"></i>;
    }
  };
  return setBookmark(status);
};

export default BookMark;
