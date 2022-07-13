import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import User from "./user";
const Users = ({ users, onDelete }) => {
  return (
    <>
      {users.length > 0 ? (
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
            <User users={users} onDelete={onDelete} />
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default Users;
