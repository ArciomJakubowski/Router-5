import React from "react";
import { Link } from "react-router-dom";

const UsersListPage = ({ users }) => {
  return (
    <>
      <h1>Users List Page</h1>

      <Link to="/">
        <h2>MainPage</h2>
      </Link>
      {""}
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}/profile`}>
          <h4>{user.label}</h4>
        </Link>
      ))}
    </>
  );
};

export default UsersListPage;
