import React, { useState } from "react";
import "../../index.css";

const noteInputDefaultState = { title: "", body: "", status: "Not Started" };

const AddNote = ({ createNoteHandler, closeModalHandler }) => {
  const [note, setNote] = useState(noteInputDefaultState);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div className="newnote-modal">
      <form
        onSubmit={(e) => {
          createNoteHandler(e, note);
          setNote(noteInputDefaultState);
          closeModalHandler();
          
        }}
        className="newmodal-form"
      >
        <div className="newnote-item">
          <label htmlFor="status">Select task status: </label>
          <select
            className="newnote-select"
            name="status"
            onChange={handleInputs}
          >
            <option value="Not Started">Not Started</option>
            <option value="In progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="newnote-item">
          <input
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={handleInputs}
            placeholder="Title"
            className="newnote-input"
          />
        </div>
        <div className="newnote-item">
          <textarea
            name="body"
            value={note.body}
            onChange={handleInputs}
            placeholder="Note"
            className="newnote-input"
          ></textarea>
        </div>
        <button className="newnote-button newnote-item" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
