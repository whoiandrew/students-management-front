import React, { useState } from "react";

const AddNote = ({ createNoteHandler }) => {
  const [note, setNote] = useState({ title: "", body: "", status: "Not Started"});

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          createNoteHandler(e, note);
        }}
      >
        <label htmlFor="status">Select task status:</label>
        <select name="status" onChange={handleInputs}>
          <option value="Not Started">Not Started</option>
          <option value="In progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <input
          name="title"
          value={note.title}
          onChange={handleInputs}
          placeholder="Title"
        />
        <textarea
          name="body"
          value={note.body}
          onChange={handleInputs}
          placeholder="Note"
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
