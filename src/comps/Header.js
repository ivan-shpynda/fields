import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "@firebase/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const Header = ({user, setUser}) => {

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null)
  }

  return (
    <div className="header">
      <Link className="logo" to="/">impressions</Link>
      { user ? 
        <FontAwesomeIcon className="logout" onClick={handleLogout} icon={faRightFromBracket} /> 
        :
        <Link className="login-icon" to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      }
    </div>
  )
}

export default Header;
