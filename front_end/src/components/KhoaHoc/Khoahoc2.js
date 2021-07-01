import React from "react";
import { Link } from "react-router-dom";

export default function Khoahoc({
  tenKh,
  tenGv,
  soBai,
  maLop,
  avt,
  imgCourses,
  id,
  deleteCourse,
  AddCourse,
}) {
  return (
    <div>
      <div
        id="courses"
        className="col-lg-4 col-md-6 d-flex align-items-stretch"
      >
        <div className="course-item">
          <img
            src={imgCourses}
            className="img-fluid"
            style={{
              maxWidth: "350px",
              width: "100%",
              // maxHeight: "250px",
              height: "250px",
              margin: "auto",
            }}
          />
          <div className="course-content" style={{ padding: "0px" }}>
            <div
              style={{ backgroundColor: "#8ab6d6" }}
              className="d-flex justify-content-between align-items-center mb-3"
            >
              {/* Roi lop */}
              {/* Hàm deleteCourse được truyền props từ home qua*/}
              <h4
                style={{
                  backgroundColor: "#8ab6d6",
                  color: "white",
                  padding: "1vw",
                }}
              >
                {/* /////////////////Xoa */}
                <button
                  onClick={() => {
                    deleteCourse(id);
                  }}
                  class="btn btn-info"
                >
                  <i class="fas fa-user-minus" style={{ color: "white" }}>
                    Rời lớp
                  </i>
                </button>
              </h4>
              <h4
                style={{
                  backgroundColor: "#8ab6d6",
                  color: "white",
                  padding: "1vw",
                }}
              >
                {/* Them ///////////////////////////////////////////////*/}
                <button
                  onClick={() => {
                    AddCourse(tenKh, tenGv, soBai, maLop, imgCourses, avt, id);
                  }}
                  class="btn btn-info"
                >
                  <i class="fas fa-user-minus" style={{ color: "white" }}>
                    Thêm lớp
                  </i>
                </button>
              </h4>
              {/* end Roi lop */}
              <p className="price">Mã code:{maLop}</p>
            </div>
          </div>

          <div
            style={{
              marginLeft: "2vw",
              marginRight: "2vw",
              maxHeight: "300px",
            }}
          >
            <h3>
              <a href="course-details.html">{tenKh}</a>
            </h3>
            <br></br>
            <div>
              <h6>Giảng viên:</h6>
              <p> {tenGv}</p>
              <h6>Số bài giảng:</h6> <p>{soBai} bai</p>
              <h6>Nội dung:</h6>
              <p>
                Incididunt do nisi nisi duis eiusmod minim proident irure amet.{" "}
              </p>
            </div>

            <button
              style={{
                color: "white",
                marginTop: "2em",
                marginLeft: "7em",
                marginRight: "2em",
                marginBottom: "2em",
              }}
              className="btn btn-info"
            >
              <Link to="/list-detail" style={{ color: "white" }}>
                Học ngay
              </Link>
            </button>
            <div
              className="trainer d-flex justify-content-between align-items-center"
              style={{ marginTop: "-2vw", marginBottom: "5em" }}
            ></div>
          </div>
        </div>
      </div>
      {/* End Course Item*/}
    </div>
  );
}
