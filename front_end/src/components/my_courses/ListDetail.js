import React from 'react'
import "./css/ListDetail.css"
import  "../header/header"
import {Link } from "react-router-dom";

export default function ListDetail() {
    return (
      <div style={{ marginTop: "8em" }}>
        <div className="container">
          <div class="container">
            <div class="row">
              <div
                class="col-md-3 col-sm-6"
                style={{ margin: "auto", marginBottom: "3em" }}
              >
                <div class="progress blue">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">80%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <table id="customers">
              <tbody>
                <tr>
                  <th>Chương</th>
                  <th>Bài</th>

                  <th>Nội dung</th>
                  <th>Tinh trạng</th>
                  <th></th>
                </tr>
                <tr>
                  <td>I</td>
                  <td>1</td>

                  <td>Reactjs la gi?</td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học ngay
                      </Link>
                    </button>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>2</td>
                  <td>Form?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>3</td>
                  <td>API module?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>4</td>
                  <td>HOC?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>5</td>
                  <td>Prop là gì?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>II</td>
                  <td>1</td>
                  <td>State là gì?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>III</td>
                  <td>1</td>
                  <td>React Router là gì?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>III</td>
                  <td>2</td>
                  <td>Redux?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>III</td>
                  <td>3</td>
                  <td>Life cycles là gì?</td>
                  <td>
                    <buttom
                      className="btn"
                      style={{ backgroundColor: "grey", color: "white" }}
                    >
                      đã xem
                    </buttom>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học lại
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>III</td>
                  <td>4</td>
                  <td>Hook?</td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#3685c5", color: "white" }}
                    >
                      <Link
                        to="/detail"
                        style={{ backgroundColor: "#3685c5", color: "white" }}
                        exact
                      >
                        {" "}
                        Học ngay
                      </Link>
                    </button>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
