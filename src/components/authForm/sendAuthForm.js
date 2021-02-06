const sendForm = async (event, dispatch, url, params, loadingHook) => {
  event.preventDefault();
  loadingHook(true);
  try {
    const res = await fetch(url, params);
    const body = await res.json();
    loadingHook(false);

    dispatch({ type: "NICKNAME", value: "" });
    dispatch({ type: "PASSWORD", value: "" });

    const currentToken = body.accessToken;

    if (currentToken) {
      dispatch({ type: "LOG_IN" });
      localStorage.setItem("accessToken", currentToken);
    }
  } catch (e) {
    console.log(e);
  }
};

export default sendForm;
