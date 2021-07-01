import React, { useState } from "react";
import Courses from "./Courses";
const DsCourse = [
  {
    id: 1,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: false,
    TienTrinh: "0%",
  },
  {
    id: 2,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: true,
    TienTrinh: "0%",
  },
  {
    id: 3,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: false,
    TienTrinh: "0%",
  },
  {
    id: 4,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: true,
    TienTrinh: "0%",
  },
  {
    id: 5,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: true,
    TienTrinh: "0%",
  },
  {
    id: 6,
    TenKH: "Toan Cao Cap",
    Gv: "Cao Thanh Tinh",
    SoBai: 20,
    Bool: false,
    TienTrinh: "0%",
  },
];
const HandleClick = () => {
  alert("click");
};


export default function List() {


  const [state, setState] = useState(DsCourse);
  return <Courses list={state} onMyCoursesClick={HandleClick} />;
}
