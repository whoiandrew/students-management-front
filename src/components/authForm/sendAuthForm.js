const sendForm = async (dispatch, url, params, loadingHook, errorHook) => {
  loadingHook(true);
  try {
    const res = await fetch(url, params);
    const body = await res.json();
    loadingHook(false);

    dispatch({ type: "NICKNAME", value: "" });
    dispatch({ type: "PASSWORD", value: "" });

    const currentToken = body.accessToken;
    const errorMessage = body.errorMessage
    if (currentToken) {
      dispatch({ type: "LOG_IN" });
      localStorage.setItem("accessToken", currentToken);
    }
    if (errorMessage) {
      errorHook(errorMessage)
    }
  } catch (e) {
    console.log(e);
  }
};

export default sendForm;