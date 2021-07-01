import React from "react";
// import MyCourses from "./List";
// import ListCourses from "./courses";

export default function Courses({list, onMyCoursesClick}) {
  return (
    <>
      <div
        style={{ height: "2000px" }}
        className="container col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
      >
        {list.map((courses, index) => (
          <div
            className="course-item"
            key={courses.id}
            onClick={() => onMyCoursesClick(courses, index)}
          >
            <img
              src="assets/img/course-3.jpg"
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex  justify-content-between align-items-center mb-3">
                <p> Tên khóa học:{courses.TenKH}</p>
                <p> Tên giảng viên:{courses.Gv}</p>
                <p> {courses.Bool}</p>
                <p> Tiến trình học:{courses.TienTrinh}</p>
              </div>
              <h3>
                <a href="course-details.html">Copywriting</a>
              </h3>
              <p>
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}