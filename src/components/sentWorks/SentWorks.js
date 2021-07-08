import React from "react";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";
import classes from "./sentWorks.module.css";

const SentWorks = () => {
  const id = JSON.parse(localStorage.getItem("user"))._id;
  const url = `http://127.0.0.1:8080/getWorks/${id}`;

  const { loader, body } = useFetch(url, { loader: false, body: {} }, reducer);
  const works = Object.keys(body).length ? body.works : [];

  console.log(works);

  return (
    <>
      {loader ? (
        <p>Loading...</p>
      ) : (
        works.map((item, index) => {
          return (
            <div>
              <p key={index}>
                {item.title} ({item.lesson})
              </p>
              <p>
                Оцінка: {item.points || "Не перевірено"}
              </p>
              <hr />
            </div>
          );
        })
      )}
    </>
  );
};

export default SentWorks;
