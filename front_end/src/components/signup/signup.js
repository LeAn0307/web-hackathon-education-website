import React from 'react'
import "./sign_up.css"
import "../header/header"
import {Link} from "react-router-dom"
export default function SignUp() {
    return (
      <div
        className="container-fluid"
        style={{
          height: "1000px",
          backgroundImage: "url(img/bg8.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <br />
          {/* <br>
                <br> */}
          <div
            className="container form"
            style={{
              borderStyle: "outset",
              borderWidth: "5px",
              paddingTop: "0.5em",
              backgroundImage: "none",
              backgroundColor: "white",
              marginTop: "5em",
              width: "500px",
            }}
          >
            <form
              style={{
                paddingBottom: "3em",
                paddingLeft: "2em",
                paddingRight: "2em",
              }}
            >
              <h1 style={{ textAlign: "center" }}>Đăng Ký</h1>
              <div className="form-group" style={{ paddingTop: "0.5em" }}>
                <label htmlFor="exampleInputEmail1">Họ và tên:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Lê An"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="mail@gmail.com"
                />
                <small id="emailHelp" className="form-text text-muted">
                  *Dùng làm tên đăng nhập
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Địa chỉ:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ktx khu A DHQG, Dĩ An, Bình Dương"
                />
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Nhập lại mật khẩu:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-info Nut">
                  <Link to="/dang-nhap"> Đăng ký</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
