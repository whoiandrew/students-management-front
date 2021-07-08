import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";
import classes from "./lessons.module.css";

const Lessons = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loader = false;

  // const url = {
  //   student: `http://api.rozklad.org.ua/v2/groups/${user.group}/lessons`,
  //   teacher: `http://api.rozklad.org.ua/v2/teachers/${user._id}/lessons`,
  // }[user.role];

  // const { loader, body } = useFetch(url, { loader: false, body: {} }, reducer);

  // const lessons = Object.keys(body).length ?  new Array(...new Set(body.data.map((item) => item.lesson_name))) : [];


  const lessons = [
    "Мультимедійні технології",
    "Комп'ютерна електроніка",
    "Гібридні КС",
    "Комп'ютерна електроніка",
  ];
  return (
    <div className={classes.pageWrapper}>
      {loader ? <p>Loading</p> :
        lessons.map((item, index) => <Lesson lessonName={item} key={index} />)}
    </div>
  );
};

export default Lessons;
