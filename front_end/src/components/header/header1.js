import React from "react";
import "./header.css";

import { Switch, Route, NavLink } from "react-router-dom";
import Message from "../message/message";
import Home from "../Home/Home";
import Blog from "../blog/blog";

import Me from "../my_courses/Me";
import ListDetail from "../my_courses/ListDetail";
import Detail from "../my_courses/Detail"
import Contest from "../Contest/Contest"
import Login from "../login/Login"
import SignUp from "../signup/signup"

export default function Header1() {
  return (
    <div>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container">
          <a id="logo" className="logo mr-auto navbar-brand " href="#">
            Navbar
          </a>

          {/* //Nut toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* end Nut toggle */}

          {/* menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink activeClassName="active" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/blog">
                  Blog 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/message">
                 Message 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/contest">
                 Contest 
                </NavLink>
              </li>
              <li className="nav-item">
                <button
             style={{ backgroundColor: " #51acd6" }}
           className="get-started-btn"
         >
          <NavLink activeClassName="active" to="/me" exact>
              Me
          </NavLink>
        </button>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
          </div>
          {/*end menu */}
        </div>
      </nav>
    </div>
  );
}
