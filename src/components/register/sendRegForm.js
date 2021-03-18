const sendForm = async (url, params=null) => {
  try {
    const res = await fetch(url, params);
    return res.status === 200 ? true : false;
  } catch (e) {
    return false;
  }
};

export default sendForm;
