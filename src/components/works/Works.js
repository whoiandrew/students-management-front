import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";

const Works = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const url = {
    student: `http://api.rozklad.org.ua/v2/groups/${user.group}/lessons`,
    teacher: `http://api.rozklad.org.ua/v2/teachers/${user._id}/lessons`,
  }[user.role];

  const { loader, body } = useFetch(url, { loader: false, body: {} }, reducer);

  const lessons = Object.keys(body).length ?  new Array(...new Set(body.data.map((item) => item.lesson_name))) : [];

  return (
    <>
      {loader ? <p>Loading</p> :
        lessons.map((item, index) => <Lesson lessonName={item} key={index} />)}
    </>
  );
};

export default Works;
