import React, { useState } from "react";
import Form from "./components/Form";

const Login = ({ /* loggedIn,*/ toggleLogin }) => {
  // console.log(logIn);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const updateUser = (event) => setUser(event.target.value);
  const updatePass = (event) => setPass(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: user,
      password: pass,
    };
    console.log(data);
    const sendToServer = JSON.stringify(data);
    console.log(`JSON String sent to server: ${sendToServer}`);
    toggleLogin();
    setUser("");
    setPass("");
  };

  return (
    <>
      <Form
        username={user}
        password={pass}
        handleUser={updateUser}
        handlePass={updatePass}
        handleSubmit={onSubmit}
      />
    </>
  );
};

export default Login;
