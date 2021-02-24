import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";

const Works = () => {
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    (async () => {
      const groupName = JSON.parse(localStorage.getItem("user")).group;
      const res = await fetch(`http://api.rozklad.org.ua/v2/groups/${groupName}/lessons`);
      const body = await res.json();
      setLessons(new Array(...new Set(body.data.map((item) => item.lesson_name))));
    })();
  },[]);



  return (
    <>
      {lessons && lessons.map((item, index) => <Lesson lessonName={item} key={index} />)}
    </>
  );
};

export default Works;
