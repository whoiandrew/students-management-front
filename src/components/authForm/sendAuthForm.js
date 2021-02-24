const sendForm = async (dispatch, url, params, loadingHook, errorHook) => {
  loadingHook(true);
  try {
    const res = await fetch(url, params);
    const body = await res.json();
    loadingHook(false);

    dispatch({ type: "USERNAME", value: "" });
    dispatch({ type: "PASSWORD", value: "" });
  
    const currentToken = body.accessToken;
    const errorMessage = body.errorMessage;

    if (currentToken) {
      dispatch({ type: "LOG_IN" });
      localStorage.setItem("accessToken", currentToken);  
      localStorage.setItem("user", JSON.stringify(body.user));

    }
    switch (errorMessage) {
      case "Request path contains unescaped characters":
        errorHook("Please, use latin letters only");
        break;
      default:
        errorHook(errorMessage);
    }
  } catch (e) {
    console.log(e);
  }
};

export default sendForm;