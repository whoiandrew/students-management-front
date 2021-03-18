import React from "react";
import {Link} from "react-router-dom";

const Lesson = ({lessonName}) => {
  const lessonPath = lessonName.split(" ").join("_");
  return (
    <>
      <p><Link to={`/works/${lessonPath}`}>{lessonName}</Link></p>
    </>
  );
}

export default Lesson;