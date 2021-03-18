import React from "react";

const Note = ({id, title, status, body, dateCreated, deleteNoteHandler}) => {
   console.log(id);
  return(
    <div> 
      <p>{title}</p>
      <p>{body}</p>
      <p>{status}</p>
      <p>{dateCreated}</p>
      <button onClick={() => { deleteNoteHandler(id)} }>Delete</button>
    </div>
  );
}

export default Note;