import React from "react";
import "./blog.css"

export default function blog() {
  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <div className="row content">
        {/* <div className="col-sm-1 sidenav"></div> */}
        <div className="col-sm-3 sidenav">
          <br />
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Blog.."
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
          <br></br>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <button
                onClick={() => {
                  alert("Hiện form tạo bài đăng");
                }}
                className="btn btn-success"
              >
                Thêm bài đăng +
              </button>
            </li>
          </ul>
        </div>
        {/* ///////////////////////////// */}
        <div className="col-sm-9">
          <h4>
            <small>RECENT POSTS</small>
          </h4>
          <hr />
          {/* ?// */}
          <div className="container" style={{ marginLeft: "auto" }}>
            <div className="col-sm-1 text-center">
              <img
                src="https://i.pinimg.com/736x/ca/f6/48/caf648cb561bfc75af16aab1554e129c.jpg"
                className="img-circle"
                height={50}
                width={50}
                alt="Avatar"
              />
            </div>
            <div className="col-sm-12">
              <h6>
                LyLy Nguyễn <small>Sep 25, 2015, 8:25 PM</small>
              </h6>
            </div>
          </div>

          {/* /// */}
          <br></br>
          <h2>Bị lỗi như thế này trên VSCODE làm sao ta??</h2>
          <br></br>
          <img
            style={{ maxHeight: "300px", height: "100%", width: "100%" }}
            src="https://user-images.githubusercontent.com/26061980/62613517-a597fb80-b91a-11e9-9edd-99738b1bb914.png"
          />
          <h5>
            <span className="glyphicon glyphicon-time" /> Post by Jane Dane, Sep
            27, 2015.
          </h5>
          <h5>
            <span className="label label-danger">Food</span>{" "}
            <span className="label label-primary">Ipsum</span>
          </h5>
          <br />
          <p>
            Food is my passion. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <br />
          {/* ......................................................... */}
          <div className="row">
            <hr />
            <h4>
              <h3>Comment:</h3>
            </h4>
            <form role="form">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  required
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            <div className="col-sm-2 text-center">
              <img
                src="https://i.pinimg.com/originals/97/59/39/97593992e5e42fe1d9592f388e62438c.jpg"
                className="img-circle"
                height={65}
                width={65}
                alt="Avatar"
              />
            </div>
            <div className="col-sm-10">
              <h4>
                John Row <small>Sep 25, 2015, 8:25 PM</small>
              </h4>
              <p>
                I am so happy for you man! Finally. I am looking forward to read
                about your trendy life. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <br />
              <p>
                <span className="badge">1</span> Comment:
              </p>
              <br />
              <div className="row">
                <div className="col-sm-2 text-center">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-circle"
                    height={50}
                    width={50}
                    alt="Avatar"
                  />
                </div>
                <div className="col-xs-10">
                  <h4>
                    Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                  </h4>
                  <p>Me too! WOW!</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////// */}
          <br />
          <br />
          <h4>
            <small>RECENT POSTS</small>
          </h4>
          <hr />
          {/* ?// */}
          <div className="container" style={{ marginLeft: "auto" }}>
            <div className="col-sm-1 text-center">
              <img
                src="https://i.pinimg.com/originals/e1/9e/58/e19e5804bf7e90226cd609b1d94b0012.jpg"
                className="img-circle"
                height={50}
                width={50}
                alt="Avatar"
              />
            </div>
            <div className="col-sm-12">
              <h6>
                Lê An<small>Sep 25, 2015, 8:25 PM</small>
              </h6>
            </div>
          </div>

          {/* /// */}
          <h2>Mình làm theo hướng dẫn thầy nhưng lỗi này thì làm sao ạ?</h2>
          <br></br>
          <img
            style={{ maxHeight: "300px", height: "100%", width: "100%" }}
            src="data:image/png;base64,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"
          />
          <h5>
            <span className="glyphicon glyphicon-time" /> Post by John Doe, Sep
            24, 2015.
          </h5>
          <h5>
            <span className="label label-success">Lorem</span>
          </h5>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <hr />
          <h4>Comment:</h4>
          <form role="form">
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                required
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
          <br />
          <br />
          <p>
            <span className="badge">2</span> Comments:
          </p>
          <br />
          <div className="row">
            <div className="col-sm-2 text-center">
              <img
                src="https://i.pinimg.com/474x/f6/7a/dc/f67adc157905920b8dae5e8d85107611.jpg"
                className="img-circle"
                height={50}
                width={50}
                alt="Avatar"
              />
            </div>
            <div className="col-sm-10">
              <h4>
                Anja <small>Sep 29, 2015, 9:12 PM</small>
              </h4>
              <p>
                Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
            </div>
            <div className="col-sm-2 text-center">
              <img
                src="https://i.pinimg.com/originals/06/7d/e2/067de2cf9f6b67f12e16f8eaf627e872.jpg"
                className="img-circle"
                height={50}
                width={50}
                alt="Avatar"
              />
            </div>
            <div className="col-sm-10">
              <h4>
                John Row <small>Sep 25, 2015, 8:25 PM</small>
              </h4>
              <p>
                I am so happy for you man! Finally. I am looking forward to read
                about your trendy life. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <br />
              <p>
                <span className="badge">1</span> Comment:
              </p>
              <br />
              <div className="row">
                <div className="col-sm-2 text-center">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-circle"
                    height={50}
                    width={50}
                    alt="Avatar"
                  />
                </div>
                <div className="col-xs-10">
                  <h4>
                    Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                  </h4>
                  <p>Me too! WOW!</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
