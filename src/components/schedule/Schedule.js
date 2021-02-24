import React from "react";
import useFetch from "../customHooks/useFetch";
import { ScheduleItem } from "./ScheduleItem";

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

const weekDaysUkr = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

const Schedule = () => {
  const url = "http://api.rozklad.org.ua/v2/groups/іо-71/lessons";

  const { loader, schedule } = useFetch(
    url,
    { loader: false, schedule: {} },
    reducer
  );

  const lessonsByDays = Boolean(Object.entries(schedule).length) && weekDaysUkr.map(day => schedule.data.filter(lesson => lesson.day_name === day));


  return (
      <div>
        <table>
          {!loader && lessonsByDays
            ? ""
            : "Loading..."}
        {/* {!loader && Object.entries(schedule).length
          ? schedule.data.map((item) => <ScheduleItem lesson={item} key={item.lesson_id}/>)
          : "Loading..."} */}
       </table>
      </div>
  );
};

const ScheduleRow = ({items}) => {
  return(
    <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  );
}

export default Schedule;
