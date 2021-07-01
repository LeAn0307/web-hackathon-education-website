import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../header/header";
import "./css/Me.css";
import KH2 from "../KhoaHoc/Khoahoc2";

export default function Me() {
  // tim kiem
  const [courses, setCourses] = useState([]);
  const [mycourses, setMyCourses] = useState([]); // de lay nhung cai course da dang ky
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  // o day them mot cai useEffect giong o tren nhung ma cho my courses
  useEffect(() => {
    fetch("http://localhost:3000/api/mycourses")
      .then((response) => response.json())
      .then((data) => setMyCourses(data));
  }, []);
  // de fetch data lo nhu nguoi dung da dang ky truoc do roi /

  // xong thi xuong duoi map my courses ra
  // hieu khong ? ok

  //lấy cái đã nhập --->Tìm kiếm
  const onChangeFilter = (e) => {
    setQuery(e.target.value);
  };

  /////////////////////////xóa///////////////////////////
  const deleteCourse = async (id) => {
    await fetch(`http://localhost:3000/api/mycourses/${id}`, {
      // xoa tren bback end
      method: "DELETE",
    });
    await fetch("http://localhost:3000/api/mycourses")
      // xoa tren front end. Dong bo front - back
      .then((response) => response.json())
      .then((data) => setMyCourses(data));
  };

  ////////////////////////////Them/////////
  const AddCourse = async (
    name,
    teacher,
    Sobai,
    MaCode,
    imgCourses,
    avt,
    id
  ) => {
    await fetch(`http://localhost:3000/api/mycourses`, {
      //Them tren bback end
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        teacher: teacher,
        Sobai: Sobai,
        MaCode: MaCode,
        avt: avt,
        imgCourses: imgCourses,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // o day goi lai ham fetch cho my courses roi set lai gia tri thoi
    fetch("http://localhost:3000/api/mycourses")
      .then((response) => response.json())
      .then((data) => setMyCourses(data));
  };
  /////////////////gET/////////////////////

  useEffect(() => {
    fetch("http://localhost:3000/api/courses") // test thu di
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container" style={{ margin: "auto", marginTop: "8em" }}>
      <div className="row">
        <div className="container" style={{ border: "2px" }}>
          {/* img */}
          <div className="row">
            <div className="trainer-profile d-flex align-items-center">
              <img
                style={{ margin: "auto" }}
                src="https://i.pinimg.com/originals/06/7d/e2/067de2cf9f6b67f12e16f8eaf627e872.jpg"
                className="img-fluid circle"
                alt=""
              />
            </div>
          </div>
          <br></br>
          {/*end img */}

          {/* Mota */}
          <div className="row">
            <div
              className="container"
              style={{
                magin: "auto",
                maxHeight: "500px",
                maxWidth: "1000px",
                height: "100%",
                width: "100%",
              }}
            >
              <form
                style={{
                  paddingBottom: "3em",
                  paddingLeft: "15em",
                  paddingRight: "15em",
                }}
              >
                <div className="form-group" style={{ paddingTop: "0.5em" }}>
                  <label htmlFor="exampleInputEmail1">Họ và tên:</label>
                  <br></br>
                  <input
                    type="email"
                    className="form-control"
                    value="blue_sky"
                    style={{
                      maxWidth: "500px",
                      width: "100%",
                      maxHeight: "50px",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email:</label> <br></br>
                  <input
                    type="email"
                    className="form-control"
                    value="bluesky@gmail.com"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Địa chỉ:</label> <br></br>
                  <input
                    type="email"
                    className="form-control"
                    value="ktx khu A DHQG, Dĩ An, Bình Dương"
                  />
                </div>{" "}
                <br></br>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Ngày sinh: </label>{" "}
                  <br></br>
                  <input type="date" value="3-7-2001" />
                </div>{" "}
                <br></br>
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="btn btn-info Nut">
                    Sửa
                  </button>
                  {/* end thong tin ca nhan */}
                </div>
              </form>
            </div>
          </div>
          {/* end Mota */}
        </div>
      </div>

      {/* end Chen them khoa hoc moi */}
      {/* //3 khóa học có sẳn */}
      <div className="row">
        <div className="container">
          {/* khoa Học */}
          <section
            id="popular-courses"
            className="courses"
            style={{ marginTop: "2em" }}
          >
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>My Courses</h2>
                <p>My Courses</p>
              </div>
              {/* Them khoa  Học */}
              {/* //Search */}
              <div
                className="container"
                style={{
                  marginTop: "2em",
                  margin: "auto",
                  marginBottom: "2em",
                }}
              >
                <input
                  style={{
                    marginTop: "2em",
                    maxWidth: "300px",
                    maxHeight: "50px",
                    width: "100%",
                    height: "100%",
                  }}
                  //Hiển thị giá trị nhập
                  onChange={(e) => {
                    onChangeFilter(e);
                  }}
                  type="text"
                  name="search"
                  placeholder="Nhập mã code của lớp học"
                ></input>
                <button
                  style={{ height: "50px", color: "black" }}
                  className="btn btn-info"
                  onClick={() => {
                    alert("Hiện ra lớp học");
                  }}
                >
                  Tìm lớp
                </button>
                <button
                  style={{ height: "50px", color: "black" ,maginRight:'3em'}}
                  className="btn btn-info"
                  onClick={() => {
                    alert("Hiện ra lớp học");
                  }}
                >
                  Tạo lớp +
                </button>
              </div>

              {/* Chen them khoa hoc moi */}
              <div className="container">
                {" "}
                {/* //Truyen drop qua khoa hoc de truyen gia tri */}
                {courses.map((kh) => {
                  if (query === kh.MaCode)
                    return (
                      <KH2
                        key={kh.id}
                        tenGv={kh.teacher}
                        tenKh={kh.name}
                        soBai={kh.Sobai}
                        maLop={kh.MaCode}
                        avt={kh.avt}
                        imgCourses={kh.imgCourses}
                        id={kh.id}
                        deleteCourse={deleteCourse}
                        AddCourse={AddCourse}
                      />
                    );
                })}
              </div>

              {/* end Them khoa  Học */}

              <div
                className="container"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                {mycourses.map((course) => {
                  return (
                    <KH2
                      key={course.id}
                      tenGv={course.teacher}
                      tenKh={course.name}
                      soBai={course.Sobai}
                      maLop={course.MaCode}
                      avt={course.avt}
                      imgCourses={course.imgCourses}
                      id={course.id}
                      deleteCourse={deleteCourse}
                      AddCourse={AddCourse}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          {/* End Popular Courses Section */}
          {/* end  khoa Học */}
        </div>
      </div>
    </div>
  );
}
