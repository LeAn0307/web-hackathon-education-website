import React, { useEffect, useState } from "react";
import "./Home.css";
import "../header/header";
import { Link } from "react-router-dom";
import "../header/header";
import KH from "../KhoaHoc/Khoahoc";
export default function Home() {
  // tim kiem
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const deleteCourse = async (id) => {
    await fetch(`http://localhost:3000/api/mycourses/${id}`, {
      // xoa tren bback end
      method: "DELETE",
    });
    await fetch("http://localhost:3000/api/mycourses/")
      // xoa tren front end. Dong bo front - back
      .then((response) => response.json())
      .then((data) => setCourses(data));
  };

  //lấy cái đã nhập --->Tìm kiếm
  const onChangeFilter = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ marginTop: "5em" }}>
      <div>
        {/* =======  background ======= */}
        <section
          id="hero"
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="container position-relative"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <h1>
              Học Hôm Nay
              <br />
              Dẫn Đầu ngày Mai
            </h1>
            <h2>Cùng Blue Sky đi đến những chân trời mới!</h2>
            <a
              className="btn "
              style={{
                backgroundColor: "#3685c5",
                color: "white",
                marginTop: "3em",
              }}
            >
              <Link style={{ color: "white" }} to="/dang-nhap">
                {" "}
                Đăng nhập
              </Link>
            </a>
          </div>
        </section>
        {/* End  background */}
        <main id="main">
          {/* Search */}
          <div
            className="container"
            style={{
              marginTop: "5em",
              margin: "auto",
              marginBottom: "5em",
            }}
          >
            <input
              style={{
                marginTop: "5em",
                maxWidth: "300px",
                maxHeight: "50px",
                width: "100%",
                height: "100%",
                // margin:"auto",
              }}
              type="text"
              name="search"
              //Hiển thị giá trị nhập
              onChange={(e) => {
                onChangeFilter(e);
              }}
              placeholder="Nhập mã code của lớp cần tìm."
            ></input>
            <button
              style={{ height: "50px", color: "white" }}
              className="btn btn-info"
              onClick={() => {
                alert("Hiện ra lớp học");
              }}
            >
              {" "}
              Tìm lớp
            </button>
          </div>
          <div className="container">
            {" "}
            {/* //Truyen drop qua khoa hoc de truyen gia tri---->dung de XOA */}
            {courses.map((kh) => {
              if (query === kh.MaCode)
                return (
                  <KH
                    key={kh.id}
                    tenGv={kh.teacher}
                    tenKh={kh.name}
                    soBai={kh.Sobai}
                    maLop={kh.MaCode}
                    avt={kh.avt}
                    imgCourses={kh.imgCourses}
                    id={kh.id}
                    deleteCourse={deleteCourse}
                  />
                );
            })}
          </div>

          {/* ======= title events ======= */}
          <section
            id="popular-courses"
            className="courses"
            style={{ marginTop: "2em" }}
          >
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2 style={{ marginTop: "2em" }}>Events</h2>
                <p>Events</p>
              </div>
              <div
                className="row"
                data-aos="zoom-in"
                data-aos-delay={100}
              ></div>
            </div>
          </section>
          {/* End Popular Courses Section */}
        </main>
        {/* End #main */}
        {/* ======= Events Section ======= */}
        <section id="events" className="events">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/events-1.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Cuộc Thi Blue Sky Intelligent</a>
                    </h5>
                    <p className="font-italic text-center">
                      Sunday, September 26th at 7:00 pm
                    </p>
                    <p className="card-text">
                      Nhằm tạo điều kiện cho sinh viên có khả năng phát triển
                      bản thân trong quá trình giảng dạy , trung tâm tổ chức ra
                      một cuộc thi Tìm kiếm tài năng Blue Sky , ở đây các bạn sẽ
                      được thử sức với các đề tài mà các bạn đã được tiếp thu
                      trong các khóa học mà các bạn đã đăng kí và sẽ được phân
                      hóa từ dễ đến khó. Nhanh chóng đăng kí để thử sức mình. Và
                      còn có các phần quà hấp dẫn chờ đón bạn phía sau
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/events-2.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Cuộc thi Blue Sky Creation</a>
                    </h5>
                    <p className="font-italic text-center">
                      Sunday, November 15th at 7:00 pm
                    </p>
                    <p className="card-text">
                      Bạn có đam mê lập trình web ? Bạn đã có ước mơ được tạo ra
                      một trang web cho riêng mình. Blue sky tổ chức ra cuộc thi
                      Blue Sky Creation để bạn có thể thực hiện được ước mơ đó.
                      Cuộc thi vừa sức cho các bạn đăng kí các khóa học lập
                      trình tại Blue Sky , qua các khóa học về lập trình từ đó
                      các bạn có thể củng cố thêm kiến thức và phát huy được
                      những gì mình đã được học quá các khóa học Blue Sky ,
                      nhanh tay đăng kí thôi nào
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Events Section */}
      </div>
    </div>
  );
}
