import React, { useState } from "react";
import User from "./user";
import api from "../../api";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap-icons/bootstrap-icons.svg";

const Users = ({ users, ...rest }) => {
  return (
    <>
      {/* {renderPhrase(users.length)} */}
      {users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      ) : null}
    </>
  );
};

export default Users;
