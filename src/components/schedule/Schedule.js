import React from "react";
import useFetch from "../customHooks/useFetch";
import { Lesson } from "./Lesson";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loader: true, schedule: {} };
    case "LOADED":
      return { loader: false, schedule: action.body };
    default:
      return state;
  }
};

const Schedule = () => {
  const url = "http://api.rozklad.org.ua/v2/groups/іо-71/lessons";

  const { loader, schedule } = useFetch(
    url,
    { loader: false, schedule: {} },
    reducer
  );
  console.log(loader, schedule);

  return (
    <>
      <div>
        {!loader && Object.entries(schedule).length
          ? schedule.data.map((item) => <Lesson lesson={item} />)
          : "Loading..."}
      </div>
    </>
  );
};

export default Schedule;
