import React from "react";
import "./Navbar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toogle"
      />

      <label for="navi-toogle" className="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <navigator className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              חיפוש מניות<span>&#xf015;</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="dic" className="navigation__link">
              מילון מושגים<span>&#xf2d9;</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="calc" className="navigation__link">
              מחשבונים<span>&#xf1ec;</span>
            </Link>
          </li>
        </ul>
      </navigator>
    </div>
  );
}

export default Navbar;
