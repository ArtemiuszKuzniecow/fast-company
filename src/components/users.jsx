import React, { useState } from "react";
import api from "../api";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // const handleDelete = (userId) => {};
  const renderPhrase = (number) => {
    return (
      <>
        <h2>
          <span className="badge bg-primary m-2">С тобой сегодня затусят</span>
        </h2>
      </>
    );
  };
  console.log(users);
  return (
    <>
      {renderPhrase()}
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
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {Array.isArray(user.qualities)
                  ? user.qualities.map((quality) => {
                      return (
                        <span className={"badge m-1 " + "bg-" + quality.color}>
                          {quality.name}
                        </span>
                      );
                    })
                  : user.qualities.name}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
