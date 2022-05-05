/* eslint-disable */
import { useState } from "react";
import axios from "axios";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3001/Login", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.warn(response);
      });
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
        <label htmlFor="text">Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label htmlFor="text">Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button type="button" onClick={register}>
          Register
        </button>
      </div>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Username..." />
        <input type="text" placeholder="Password..." />
        <button type="button">Register</button>
      </div>
    </div>
  );
}

export default Login;
