import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onFavourite }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = users.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  const table = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <User users={userCrop} onDelete={onDelete} onFavourite={onFavourite} />
      </tbody>
    </table>
  );

  return (
    <>
      {users.length ? table : null}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFavourite: PropTypes.func.isRequired
};

export default Users;
