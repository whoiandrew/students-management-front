import React from "react";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";

const SentWorks = () => {
  const id = JSON.parse(localStorage.getItem("user"))._id;
  const url = `http://127.0.0.1:8080/getWorks/${id}`;

  const { loader, body } = useFetch(url, { loader: false, body: {} }, reducer);
  const works = Object.keys(body).length ? body.works : [];

  return (
    <>
      {loader ? (
        <p>Loading...</p>
      ) : (
        works.map((item, index) => (
          <p key={index}>
            {item.title} ({item.lesson})
          </p>
        ))
      )}
    </>
  );
};

export default SentWorks;
