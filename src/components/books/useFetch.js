import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";




export const useFetch = (url) => {
  console.log("fetching books");
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const body = await response.json();
        dispatch({ type: "SETBOOKS", books: body});
      };
      fetchData();
    }, [accessToken, dispatch, url]);

};
