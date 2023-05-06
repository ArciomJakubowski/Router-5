import React from "react";
import { Link } from "react-router-dom";

const UserPage = ({ id, users }) => {
  console.log(typeof id);
  console.log(users);

  const getUserById = (id) => {
    return users.find((user) => user.id.toString() === id);
  };

  const user = getUserById(id);
  console.log(user);
  return (
    <>
      <h1> userPage</h1>
      {/* <h2>{user && user.label}</h2> */}
      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${id}/profile/edit`}>Edit this User</Link>
        </li>
      </ul>
      <h4>userId: {id}</h4>
    </>
  );
};

export default UserPage;
