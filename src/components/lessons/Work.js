import React, { useState } from "react";
import classes from "./lessons.module.css";
import { useLastSegmentOfLocation } from "../../tools/tools";

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
      headers: {
        Type: "formData",
        Authorization: `Bearer ${accessToken}`,
      },
      body: data,
    });
  };

  return (
    <div className={classes.pageWrapper}>
      <input type="file" name="file" onChange={uploadHandler} />
      <div className={classes.error}>{error.state && error.message}</div>
      {uploaded.state ? (
        <button
          className={classes.sendFileButton}
          onClick={() => sendHandler(uploaded.file)}
        >
          Send my work
        </button>
      ) : (
        <button className={classes.sendFileButton} disabled>
          Send my work
        </button>
      )}
    </div>
  );
};

export default Work;
