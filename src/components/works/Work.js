import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const useLastSegmentOfLocation = () => {
  const location = useLocation().pathname.split("/");
  return location[location.length - 1];
}

const Work = () => {
  const [error, setError] = useState({ state: false, message: "" });
  const [uploaded, setUploaded] = useState({ state: false, file: null });
  const currentLocation = useLastSegmentOfLocation();

  
  const user = JSON.parse(localStorage.getItem("user"));

  const uploadHandler = (e) => {
    const fileName = e.target.files[0]?.name;
    const file = e.target.files[0];

    if (fileName) {
      if (fileName.match(/\.(doc|docx|pdf|odt)$/gi)) {
        setUploaded({ state: true, file });
      } else {
        setError({
          state: true,
          message: "Choose correct format (doc, docx, odt, pdf)",
        });
      }
    } else {
      setError({
        state: false,
        message: "",
      });
    }
  };

  const sendHandler = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("author", user._id);
    data.append("lesson", currentLocation);
    const accessToken = localStorage.getItem("accessToken");
    await fetch("http://localhost:8080/uploadWork", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: data,
    });
  };

  return (
    <>
      <input type="file" name="file" onChange={uploadHandler} />
      <div>{error.state && error.message}</div>
      {uploaded.state ? (
        <button onClick={() => sendHandler(uploaded.file)}>Send file</button>
      ) : (
        <button disabled>Send file</button>
      )}
    </>
  );
};

export default Work;