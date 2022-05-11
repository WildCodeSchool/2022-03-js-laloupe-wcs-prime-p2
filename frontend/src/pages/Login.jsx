/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import HomeIcons from "../assets/Home.png";
import CatIcons from "../assets/Categories.png";
import CoeurIcons from "../assets/Coeur.png";
import loginIcons from "../assets/login.png";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  // axios.defaults.withCredentials = true;

  const register = () => {
    axios
      .post(
        "http://localhost:8000/register",
        {
          username: usernameReg,
          password: passwordReg,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.warn(response);
      });
  };
  const login = () => {
    axios
      .post("http://localhost:8000/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/login").then((response) => {
      // console.warn(response);
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="log-reg">
      <div className="registration">
        <h2>Create your account</h2>
        <input
          className="input-login"
          type="text"
          placeholder="Choice an username..."
          id="username"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />

        <input
          className="input-login"
          type="text"
          placeholder="Choice a password..."
          ide="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button className="login-button" type="button" onClick={register}>
          Register
        </button>
      </div>
      <div className="login">
        <h2>Login</h2>
        <input
          className="input-login"
          type="text"
          placeholder="Your username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="input-login"
          type="password"
          placeholder="your password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="login-button" type="button" onClick={login}>
          Login
        </button>
      </div>
      <h1 className="loginstatus">
        {loginStatus ? `Welcome ${loginStatus}` : "Login please..."}
      </h1>
      <div className="logo2">
        <Link to="/">
          <img src={logo} alt="logo2" />
        </Link>
      </div>
      <ul className="Nav">
        <Link to="/">
          <li className="home">
            <img className="imgFooter" src={HomeIcons} alt="Home Icons" />
            <p className="navigation">
              <span>Home</span>
            </p>
          </li>
        </Link>
        <Link to="/Categories">
          <li className="cat">
            <img className="imgFooter" src={CatIcons} alt="Categories Icons" />
            <p className="navigation">
              <span>Genres</span>
            </p>
          </li>
        </Link>
        <Link to="/CoupDeCoeur">
          <li className="coup-de-coeur">
            <img className="imgFooter" src={CoeurIcons} alt="Coup de coeur" />
            <p className="navigation">
              <span>Favorite</span>
            </p>
          </li>
        </Link>
        <Link to="/Login">
          <li className="Login">
            <img className="imgFooter" src={loginIcons} alt="Login" />
            <p className="navigation">
              <span>Login</span>
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Login;
