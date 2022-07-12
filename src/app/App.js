import React, { useState } from "react";
import api from "../api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };
  console.log(users);
  return <div>{Users({ users })}</div>;
}

export default App;
