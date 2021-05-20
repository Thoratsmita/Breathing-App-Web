import React, { useState } from "react";
import Form from "./components/Form";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
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
    setLogin(true);
    setUser("");
    setPass("");
  };
  if (login !== null) {
    setTimeout(() => {
      setLogin(null);
    }, 5000);
  }
  return (
    <>
      <h1>Login</h1>
      {login ? <div className={"success"}>Logged in</div> : null}
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
