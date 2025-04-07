import React from "react";
import logoPsalms from "../assets/psalms_logo.png";

const Header = () => {
  return (
    <div>
      <img src={logoPsalms} alt="Logo da Psalms" />
      <a className="header__link" href="/">
        <h1>Psalms</h1>
      </a>
    </div>
  );
};

export default Header;
