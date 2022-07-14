import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ users, onDelete, onFavourite }) => {
  return users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Qualitie qualities={user.qualities} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <button onClick={() => onFavourite(user)}>
          <BookMark status={user.bookmark} />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(user)}
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default User;
