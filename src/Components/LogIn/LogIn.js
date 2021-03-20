import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
          const {displayName, email} = result.user;
        const signedInUser = { name: displayName, email: email};
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
};

const handleBlur = (e) => {
    let isFieldValid = true;
if(e.target.name === "email"){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
}
if(e.target.name === "password"){
    const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
}
if(isFieldValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
}
}

const handleSubmit = (e) => {
    
    if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then( res => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch( error => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then( res => {
    const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(res.user);
  })
  .catch( error => {
    const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
  });
    }
    e.preventDefault()
}

const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
    }).catch(function(error) {
        console.log(error)
    });
}
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
            {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" required/>}
            <br/>
            <input type="email" name="email" onBlur={handleBlur} placeholder="Your Email" required/>
            <br/>
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input type="submit" value={newUser ? "Signup" : "SignIn"}/>
        </form>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
        <label htmlFor="newUser">Create an account</label>
        <br/>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="btn btn-primary"
      >
        Sign In With Google
      </button>
      <p style={{color: 'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>user {newUser ? "created" : "loggedIn"} successfully</p>}
    </div>
    </div>
  );
};

export default LogIn;
