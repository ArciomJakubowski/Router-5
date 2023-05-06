import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../component/editUserPage";
import UserPage from "../component/userPage";
import UsersListPage from "../component/usersListPage";

const Users = () => {
  const users = [
    { id: 1, label: "user1" },
    { id: 2, label: "user2" },
    { id: 3, label: "user3" },
    { id: 4, label: "user4" },
    { id: 5, label: "user5" },
  ];

  // const userId = match.params.userId;
  // console.log(userId);
  const params = useParams();

  const { userId, edit } = params;

  return (
    <>
      {userId ? (
        edit ? (
          <EditUserPage id={userId} />
        ) : (
          <UserPage id={userId} users={users} />
        )
      ) : (
        <UsersListPage users={users} />
      )}
    </>
  );
};

export default Users;
