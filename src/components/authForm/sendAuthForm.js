const sendForm = async (dispatch, url, params, loadingHook, errorHook) => {
  loadingHook(true);
  console.log(url);
  try {
    const res = await fetch(url, params);
    const body = await res.json();
    loadingHook(false);

    dispatch({ type: "USERNAME", value: "" });
    dispatch({ type: "PASSWORD", value: "" });

    const { accessToken, errorMessage } = body;
    const user = JSON.stringify(body.user);

    if (accessToken && !errorMessage) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", user);
      dispatch({ type: "LOG_IN" });
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
