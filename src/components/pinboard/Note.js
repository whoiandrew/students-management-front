import React from "react";
import "../../index.css";
import { parseISOStringDate } from "../../tools/tools";

const Note = ({ id, title, status, body, dateCreated, deleteNoteHandler }) => {
  console.log(id);
  return (
    <div className="note">
      <p className="note-title">{title}</p>
      <p className="">{body}</p>
      <p>{status}</p>
      <p>{parseISOStringDate(dateCreated)}</p>
      <button
        className="remove-button"
        onClick={() => {
          deleteNoteHandler(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
