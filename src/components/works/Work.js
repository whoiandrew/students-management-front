import React, { useState } from "react";

const Work = () => {
  const [error, setError] = useState({ state: false, message: "" });
  const [uploaded, setUploaded] = useState({ state: false, file: null });

  const uploadHandler = (e) => {
    const fileName = e.target.files[0]?.name;
    const file = e.target.files[0];

    if (fileName.match(/\.(doc|docx|pdf|odt)$/gi)) {
      setUploaded({ state: true, file });
    } else {
      setError({
        state: true,
        message: "Choose correct format (doc, docx, odt, pdf)",
      });
    }
  };

  const sendHandler = async (file) => {
    const data = new FormData();
    data.append("file", file);
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