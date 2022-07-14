import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

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
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onFavourite={handleFavourites}
      />
    </>
  );
}

export default App;
