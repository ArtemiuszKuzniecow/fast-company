import React, { useState } from "react";
import api from "../api";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user !== userId));
  };
  const renderPhrase = (number) => {
    let phrase;
    let bgColor;
    if (
      Number(number.toString()[number.toString().length - 2]) > 1 ||
      (number.toString().length === 1 &&
        Number(number.toString()[number.toString().length - 1]) >= 2 &&
        Number(number.toString()[number.toString().length - 1]) <= 4)
    ) {
      phrase = number + " человека туснут с тобой сегодня";
      bgColor = "bg-primary";
    } else if (number === 0) {
      phrase = "Никто с тобой не тусанёт";
      bgColor = "bg-danger";
    } else {
      phrase = number + " человек туснёт с тобой сегодня";
      bgColor = "bg-primary";
    }
    return (
      <>
        <h2>
          <span className={"badge m-2 " + bgColor}>{phrase}</span>
        </h2>
      </>
    );
  };
  return (
    <>
      {renderPhrase(users.length)}
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
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {Array.isArray(user.qualities)
                    ? user.qualities.map((quality) => {
                        return (
                          <span
                            className={"badge m-1 " + "bg-" + quality.color}
                            key={quality.name}
                          >
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
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(user)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default Users;
