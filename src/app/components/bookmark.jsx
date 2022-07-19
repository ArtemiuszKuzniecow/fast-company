import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status }) => {
  if (status === true) {
    return <i className="bi bi-bookmark-heart-fill"></i>;
  } else {
    return <i className="bi bi-bookmark"></i>;
  }
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
};

export default BookMark;
