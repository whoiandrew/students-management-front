import { useEffect, useReducer } from "react";

const useFetch = (url, defaultState, reducer, params = null) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "LOADING", body: {} });
        const res = await fetch(url, params);
        const body = await res.json();
        dispatch({ type: "LOADED", body });
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url, params]);

  return state;
};

export default useFetch;
