import React from "react";
import { Redirect } from "react-router-dom";
import logo from "../../images/лого1.png";

function Header({ handleRedirect }) {
  return (
    <section className="header">
      <ul className="header__seasons-nav">
        <li
          className="header__season-nav_element header__season-nav_clicked"
          id="s1"
          onClick={handleRedirect}
        >
          1 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s2"
          onClick={handleRedirect}
        >
          2 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s3"
          onClick={handleRedirect}
        >
          3 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s4"
          onClick={handleRedirect}
        >
          4 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s5"
          onClick={handleRedirect}
        >
          5 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s6"
          onClick={handleRedirect}
        >
          6 сезон
        </li>
      </ul>
      <img className="header__logo" src={logo} alt="logo"></img>
    </section>
  );
}
export default Header;
