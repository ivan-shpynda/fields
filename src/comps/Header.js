import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "@firebase/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import i18n from "../i18";

const Header = ({user, setUser}) => {

  const [lang, setLang] = useState(null);
  useEffect(() => {
    setLang(i18n.language);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null)
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLang(i18n.language);
  }

  return (
    <div className="header">
      <Link className="logo" to="/">impressions</Link>
      <div className="header-wrap">
        <div className="lang">
          <span className={`lang-variant ${lang === 'en' ? 'active' : ''}`} onClick={() => changeLang("en")}>EN</span>
          <span>|</span>
          <span className={`lang-variant ${lang === 'uk' ? 'active' : ''}`} onClick={() => changeLang("uk")}>UA</span>
        </div>
        { user && <FontAwesomeIcon className="logout" onClick={handleLogout} icon={faRightFromBracket} /> }
      </div>
    </div>
  )
}

export default Header;
