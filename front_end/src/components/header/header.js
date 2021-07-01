import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Message from "../message/message";
import Home from "../Home/Home";
import Blog from "../blog/blog";

import Me from "../my_courses/Me";
import './header.css'
import ListDetail from "../my_courses/ListDetail";
import Detail from "../my_courses/Detail"
import Contest from "../Contest/Contest"
import Login from "../login/Login"
import SignUp from "../signup/signup"
export default function Header() {
  return (
    <div>
      <header id="header" className="fixed-top">

        <div className="container d-flex align-items-center">
{/*         
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarRes">
            <span className="navbar-toggler-icon">
            </span>
          </button> */}

          <h1 className="logo mr-auto">
            <a href="/">Blue Sky</a>
          </h1>

          
          <nav className="nav-menu d-lg-block">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/message">
                  Message
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contest">
                  Contest
                </NavLink>
              </li>              
            </ul>
          </nav>      
          
          {/* .nav-menu */}
          <button
            style={{ backgroundColor: " #51acd6" }}
            className="get-started-btn"
          >
            <NavLink activeClassName="active" to="/me" exact>
              Me
            </NavLink>
          </button>
         
        </div>
      </header>
      {/* End Header */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/message" component={Message} />
        <Route path="/contest" component={Contest} />
        {/* <Route path="/sign-in" component={SignIn} /> */}
        <Route path="/me" component={Me} />
        <Route path="/list-detail" component={ListDetail} />
        <Route path="/detail" component={Detail} />
        <Route path="/dang-nhap" component={Login} />
        <Route path="/dang-ky" component={SignUp} />
      </Switch>
    </div>
  );
}
