import React from "react";
import { Link } from "react-router-dom";

const EditUserPage = ({ id }) => {
  const anotherUser = Number(id) + 1;

  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${id}/profile`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${anotherUser}`}>Another User</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </>
  );
};

export default EditUserPage;
