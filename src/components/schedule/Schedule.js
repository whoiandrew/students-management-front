import React, { useState } from "react";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";
import { weekDaysUkr } from "../../data/data";
import ScheduleTable from "./ScheduleTable";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import "../../index.css";

const MAX_LESSONS_NUMBER = 6;


const Schedule = () => {
  const user = JSON.parse(localStorage.getItem("user"));


  //use schedule url depending on user's role
  const url = {
    student: `http://api.rozklad.org.ua/v2/groups/${user.group}/lessons`,
    teacher: `http://api.rozklad.org.ua/v2/teachers/${user._id}/lessons`
  }[user.role];


  const { loader, body } = useFetch(
    url,
    { loader: false, body: {} },
    reducer
  );

  //1st inner array - 1sts lessons for all days etc.
  const lessonRowsByWeek = (weekNumber) => {
    return Boolean(Object.entries(body).length) &&
    new Array(MAX_LESSONS_NUMBER).fill(null).map((_, index) => {
      return body.data.filter(
        (lesson) =>
          lesson.lesson_number === String(index + 1) &&
          lesson.lesson_week === String(weekNumber)
      );
    });
  }

  //show 1st week by default
  const [week, setWeek] = useState("1");

  const radioHandler = (e) => {
    const weekNumber = e.target.value;
    setWeek(weekNumber);
  }

  return (
    <div className="page-wrapper">
      {!loader && lessonRowsByWeek(week) ? (
        <ScheduleTable weekDays={weekDaysUkr} lessonRows={lessonRowsByWeek(week)} />
      ) : (
        "Loading..."
      )}
      { !loader && 
        <RadioForm week={week} radioHandler={radioHandler} />
      }
    </div>
  );
};

const RadioForm = ({week, radioHandler}) => {
  return(
    <FormControl className="radio" component="fieldset">
    <FormLabel component="legend">Week: </FormLabel>
    <RadioGroup aria-label="week" name="week" value={week} onChange={radioHandler}>
      <FormControlLabel value="1" control={<Radio />} label="1st week" />
      <FormControlLabel value="2" control={<Radio />} label="2nd week" />
    </RadioGroup>
  </FormControl>
  );
}


export default Schedule;
