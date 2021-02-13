import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetch = (url) => {
  console.log("fetching books");
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    (async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const body = await response.json();
      dispatch({ type: "SETBOOKS", books: body });
    })();
  }, [accessToken, dispatch, url]);
};
