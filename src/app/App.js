import React, { useState } from "react";
import api from "../api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleFavourites = (userFavourite) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user === userFavourite) {
          console.log(user);
          if (user.bookmark === true) {
            user.bookmark = false;
          } else {
            user.bookmark = true;
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
