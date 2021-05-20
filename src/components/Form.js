import React from "react";

const Form = ({ username, password, handleUser, handlePass, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUser} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePass} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Form;
