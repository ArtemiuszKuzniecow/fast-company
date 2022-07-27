import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React from "react";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const BookMark = ({ status }) => {
  if (status) {
    return <i className="bi bi-bookmark-heart-fill"></i>;
  } else {
    return <i className="bi bi-bookmark"></i>;
  }
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
};

export default BookMark;
