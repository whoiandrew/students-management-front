import React from "react";
import { useFetch } from "./useFetch";
import { useSelector } from "react-redux";
import { URL, PORT_AUTH } from "../../constants";

const Books = () => {
  const url = URL + PORT_AUTH;
  useFetch(url + "/books");
  const books = useSelector((state) => state.books);
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
