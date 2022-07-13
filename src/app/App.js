import React, { useState } from "react";
import api from "../api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDelete} />
    </>
  );
}

export default App;
