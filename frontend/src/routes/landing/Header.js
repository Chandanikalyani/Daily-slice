import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import { Link, NavLink } from "react-router-dom";
import SuccessMsg from "../../components/SuccessMsg";
import ResetLocation from "../../helpers/ResetLocation";

const Header = ({
  loginModal,
  productsQuantity,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin,
  activateLoginModal,
}) => {
  return (
    <header>
      {loginModal}
      <nav className="main-nav flex-container flex-row txt-center">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white"
          style={{textDecoration:"none"}}
        >
          <img
            className="rounded-circle"
            width="100px"
            height="100px"
            src="images/logo.png"
            alt="Pizza Time logo"
          />
          <h1>
            Italian<span> Pizza </span>
          </h1>
        </NavLink>
        <ul
          className={`navigation-menu flex-row pop-font ${
            isModalActive ? "active" : ""
          }`}
        >
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={{textDecoration:"none"}}
              className="txt-white"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={{textDecoration:"none"}}
              className="txt-white"
              to="/menu"
            >
              Menu
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={{textDecoration:"none"}}
              className="txt-white"
              to="/blog"
            >
              Blog
            </NavLink>
          </li> */}
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={{textDecoration:"none"}}
              className="txt-white"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={{textDecoration:"none"}}
              className="txt-white"
              to="/contact"
            >
              Feedback
            </NavLink>
          </li>
          {validLogin ? (
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                style={{textDecoration:"none"}}
                className="txt-white"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          ) : null}
          <li>
            <div className="login-and-cart">
              {validLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    handleLogout();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <div
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    activateLoginModal();
                  }}
                >
                  Log in
                </div>
              )}
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                style={{textDecoration:"none"}}
              >
                <p>Reservation</p>
              </NavLink>
            </div>
          </li>
        </ul>
        <img
          width="50"
          height="50"
          className="burger-bars"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
      <SuccessMsg />
    </header>
  );
};
// }

export default Header;
