import React, { useEffect, useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import useFetch from "../customHooks/useFetch/useFetch";
import reducer from "../customHooks/useFetch/fetchReducer";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../../index.css";

const useStyles = makeStyles((theme) => ({
  background: {},
  modal: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    outline: "none",
  }
}));

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

  //modal related ---
  let classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //------

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
    <div className={`page-wrapper ${open ? "blured-background" : ""}`}>
      {loader && Boolean(Object.keys(body).length) ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{notes && `You have ${notes.length} notes`}</p>

          <button type="button" className="add-button" onClick={handleOpen}>
            +
          </button>
          <Modal
            className={`${classes.modal}`}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <AddNote closeModalHandler={handleClose} createNoteHandler={createNoteHandler} />
              </div>
            </Fade>
          </Modal>

          <div className="note-wrapper">
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
          </div>
        </>
      )}
    </div>
  );
};

export default Pinboard;
