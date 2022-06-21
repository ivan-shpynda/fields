import React, { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"

const LoginPage = ({ setUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const hangleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-form">
      <FontAwesomeIcon className="user-icon" icon={faUser} />
      <input className="login-input" type="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }}/>
      <input  className="login-input" type="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} />
      <button className="login-btn" onClick={hangleLogin}>
        <span>Login</span>
      </button>
    </div>
  )
}

export default LoginPage;
