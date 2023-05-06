import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/users">
        <h2>users List Page</h2>
      </Link>
    </>
  );
};

export default MainPage;
