import React, { useContext, useState } from "react";

import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {
  initializeLogInFramework,
  handleGoogleSignIn,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "./logInManager";

const LogIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeLogInFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="card p-3">
          <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit}>
              {newUser && (
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  required
                />
              )}
              <br />
              <input
                type="email"
                name="email"
                className="form-control"
                onBlur={handleBlur}
                placeholder="Your Email example: firebae@gmail.com"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                className="form-control"
                onBlur={handleBlur}
                placeholder="Your Password: must be a number and 6 characters long"
                required
              />
              <br />
              <input type="submit" value={newUser ? "Signup" : "SignIn"} />
            </form>
            <label htmlFor="newUser">Already have an account?</label>
            <Link onClick={() => setNewUser(!newUser)} name="newUser">
              create an account
            </Link>

            <br />
            <p style={{ color: "red" }}>{user.error}</p>
            {user.success && (
              <p style={{ color: "green" }}>
                user {newUser ? "created" : "loggedIn"} successfully
              </p>
            )}
            <button
              type="button"
              onClick={googleSignIn}
              className="btn btn-primary"
            >
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
