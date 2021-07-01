import React from 'react'
import "./login.css"
import "../header/header"
import {Link} from "react-router-dom"
export default function Login() {
    return (
      <div className="vitri">
        <div>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* Bootstrap CSS */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <title>Đăng nhập</title>
          <link rel="stylesheet" href="login.css" />
          <div
            className="container-fluid"
            style={{
              height: "100vh",
              backgroundImage: "url(img/bg8.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <br />
                <br />
                <div
                  className="container form"
                  style={{
                    borderStyle: "outset",
                    borderWidth: "5px",
                    paddingTop: "2em",
                    backgroundImage: "none",
                    backgroundColor: "white",
                  }}
                >
                  <form
                    style={{
                      paddingBottom: "3em",
                      paddingLeft: "2em",
                      paddingRight: "2em",
                    }}
                  >
                    {/* #fce5df;"> */}
                    <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
                    <br />
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tên đăng nhập:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="mochi@gmail.com"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        *Nhập địa chỉ email
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mật khẩu:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        style={{ paddingBottom: "2em" }}
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <div style={{ textAlign: "center"}}>
                      <button
                         type="submit"
                        className="btn btn-info "
                      >
                        <Link
                          style={{
                            textAlign: "center",
                            color: "white",
                            textDecoration: "none",
                          }}
                          to="/"
                        >
                          Đăng nhập
                        </Link>
                      </button>
                    </div>
                    <div
                      style={{
                        paddingTop: "2em",
                        textDecoration: "rgb(219, 155, 219)",
                      }}
                    >
                      Bạn mới biết đến Mochi?{" "}
                      <a href="sign up.html">
                        <Link to="dang-ky">Đăng ký ngay</Link>
                      </a>
                    </div>
                    {/* đi qua trang đăng ký */}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
    );
}
