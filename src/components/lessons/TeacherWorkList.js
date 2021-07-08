import React, { useMemo, useState, useEffect } from "react";
import { useLastSegmentOfLocation } from "../../tools/tools";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";
import TeacherWork from "./TeacherWork";
import classes from "./lessons.module.css";

const TeacherWorkList = () => {
  const lessonName = useLastSegmentOfLocation().split(" ").join("_");
  const url = "http://localhost:8080/getLessonWorks";

  const [works, setWorks] = useState(null);

  const requestParams = useMemo(() => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonName }),
    };
  }, [lessonName]);

  const { loader, body } = useFetch(
    url,
    { loader: false, body: {} },
    reducer,
    requestParams
  );
  console.log(works);

  useEffect(() => {
    if (body.works) {
      setWorks(body.works);
      console.log(body.works);
    }
  }, [body.works]);

  return (
    <div className={classes.pageWrapper}>
      {loader ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(works) &&
        works.map(({ _id, title, author, isChecked, points }) => {
          return (
            <TeacherWork
              id={_id}
              title={title}
              author={author}
              isChecked={isChecked}
              points={points}
            />
          );
        })
      )}
    </div>
  );
};

export default TeacherWorkList;
