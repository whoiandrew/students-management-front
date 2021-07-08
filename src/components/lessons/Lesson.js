import React from "react";
import { Link } from "react-router-dom";
import classes from "./lessons.module.css";

const Lesson = ({ lessonName }) => {
  const lessonPath = lessonName.split(" ").join("_");
  const { role } = JSON.parse(localStorage.getItem("user"));
  console.log(role);
  return (
    <Link
      className={classes.lesson}
      to={`/${role === "student" ? "works" : "teacherWorkList"}/${lessonPath}`}
    >
      {lessonName}
    </Link>
  );
};

export default Lesson;
