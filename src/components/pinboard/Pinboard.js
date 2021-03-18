import React, { useEffect, useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";

const Pinboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const urlGetAll = `http://127.0.0.1:8080/getNotes/${user._id}`;
  const urlAdd = `http://127.0.0.1:8080/addNote`;
  const urlRemove = (noteId) => `http://127.0.0.1:8080/removeNote/${noteId}`;

  const [notes, setNotes] = useState(null);

  const { loader, body } = useFetch(
    urlGetAll,
    { loader: false, body: "" },
    reducer
  );

  useEffect(() => {
    if (body.notes) {
      setNotes(body.notes);
    }
  }, [body.notes]);

  const deleteNoteHandler = (id) => {
    // setNotes(notes.filter((item) => item.id !== id));
    (async () => {
      const url = urlRemove(id);
      try {
        const res = await fetch(url);
        const respBody = await res.json();
        setNotes(notes.filter((item) => item._id !== id));
        console.log(notes);
        console.log(respBody);
        console.log("requesting" + url);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  const createNoteHandler = (e, { status, title, body }) => {
    e.preventDefault();
    const currentNote = {
      title,
      body,
      author: user._id,
      status,
      dateCreated: new Date().toISOString(),
    };
    (async () => {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentNote),
      };
      try {
        const res = await fetch(urlAdd, params);
        const respBody = await res.json();
        setNotes([...notes, respBody.notes.doc]);
        console.log("requesting" + urlAdd);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <div>
      {loader && Boolean(Object.keys(body).length) ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{notes && `Notes: ${notes.length}`}</p>
          <AddNote createNoteHandler={createNoteHandler} />
          {notes &&
            notes.map(({ _id, title, status, body, dateCreated }) => {
              const id = _id;
              return (
                <Note
                  status={status}
                  key={id}
                  id={id}
                  title={title}
                  body={body}
                  dateCreated={dateCreated}
                  deleteNoteHandler={deleteNoteHandler}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default Pinboard;
