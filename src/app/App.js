import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import Users from "./components/users";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.users.default.fetchAll().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleFavourites = (userFavourite) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === userFavourite) {
          if (user.bookmark === true) {
            return { ...user, bookmark: false };
          } else {
            return { ...user, bookmark: true };
          }
        }
        return user;
      })
    );
  };

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };

  return (
    users[0] && (
      <Users
        users={users}
        onDelete={handleDelete}
        onFavourite={handleFavourites}
      />
    )
  );
}

export default App;
