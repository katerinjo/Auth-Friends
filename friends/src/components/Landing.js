import React from "react";

import Login from './Login';

export default ({ subFun }) => {
  return (
    <>
      <h2>Log In</h2>
      <Login subFun={subFun} />
    </>
  );
}