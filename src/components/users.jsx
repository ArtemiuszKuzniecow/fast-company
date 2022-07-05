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
            <>
              <tr key={user._id}>
                <th>{user.name}</th>
                <td>{user.qualities}</td>
                <td>{user.profession}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
