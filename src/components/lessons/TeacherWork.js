import React, { useState } from "react";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import classes from "./lessons.module.css";

const TeacherWork = ({
  id,
  title,
  author,
  setInfoMessage,
  points,
  isChecked,
}) => {
  const [rate, setRate] = useState("");
  console.log(points);
  const downloadHandler = async () => {
    try {
      const res = await fetch(`http://localhost:8080/getWork/${id}`);
      await res.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = title;
        a.click();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  const sendRatehandler = async (e) => {
    const res = await fetch(`http://localhost:8080/updateRate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, rate }),
    });
    if (res.status < 200 || res.status > 299) {
      setInfoMessage(`Can not update rate for work ${title}`);
    }
  };

  return (
    <div className={classes.teacherWork}>
      <p>{isChecked}</p>
      {isChecked && points ? (
        <div style={{ color: "green" }}>
          <p>Роботу перевірено</p>
          <p>Кількість балів: {points}</p>
        </div>
      ) : (
        <p style={{ color: "yellow" }}>Роботу не оцінено</p>
      )}
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={downloadHandler}>
        <GetAppOutlinedIcon />
      </button>
      <form>
        <label htmlFor="rate">Rate: </label>
        <input
          placeholder="input a number"
          name="rate"
          type="number"
          autoComplete="off"
          maxLength="5"
          value={rate}
          onChange={rateHandler}
        />
        <button type="button" onClick={sendRatehandler}>
          update work's rate
        </button>
      </form>
    </div>
  );
};

export default TeacherWork;
