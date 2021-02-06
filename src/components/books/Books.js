import React, { useContext } from "react";
import { useFetch } from "./useFetch";
import { MainContext } from "../../App";
import { useSelector } from "react-redux";

const Books = () => {
  const url = "http://127.0.0.1:8080";
  useFetch(url + "/books");
  const books = useSelector(state => state.books);
  console.log(typeof books);


  return (
    <>
      {books.map((item, index) => {
        return <Book key={index} {...item} />;
      })}
    </>
  );
};

const Book = ({ title, author, year }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Books;
