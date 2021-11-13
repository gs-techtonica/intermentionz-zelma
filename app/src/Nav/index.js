import React, { useState } from "react";

// Navigation Bar
import { NavLink } from "react-router-dom";
// test comment

import useAuth0 from "../auth/useAuth0";
import { Login, Logout } from "../auth/widgets";

import "./Nav.css";

const Nav = () => {
  // imports & states
  // used in handleclick(Hamburger/X) & closeMobileMenu(LINKS)
  const [click, setClick] = useState(false);
  // show button or not - used in useEffect

  // functions
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      {/* <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <Auth /> */}
      {/* holds entire navbar */}
      <div className="navbar-container">
        {/* Zelma text */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h4 className="logo-text">
            Inter<span>Mention</span>
          </h4>
          {/* <i class='fab fa-typo3' /> */}
        </NavLink>

        {/* Hamburger Menu */}
        <div
          role="menu"
          className="menu-icon"
          onClick={handleClick}
          onKeyDown={handleClick}
          tabIndex={0}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* Nav Menu */}
        {/* .active class is added in mobile */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-links" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-links" to="dashboard">
              Dashboard
            </NavLink>
            {/* End Smooth Scroll Section */}
          </li>
          <div className="login-btn">
            <Auth className="auth-btn" />
          </div>
          {/* <div className="dropdown">
            <i className="fas fa-user dropbtn"></i>
            <div class="dropdown-content">
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
              <Logout />
            </div>
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

const Auth = () => {
  const { isAuthenticated } = useAuth0();

  // when user is logged in, Logout shows; and vice versa
  return isAuthenticated ? (
    <>
      <div log-btn className="auth-logout">
        {/* <p className="greetings">Hey, {user.given_name}!</p> */}
        <Logout />
      </div>
    </>
  ) : (
    <div log-btn>
      <Login className="auth-login" />
    </div>
  );
};

export default Nav;
