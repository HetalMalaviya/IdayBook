import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <>
      <AddNote />
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600 text-center my-6">
          Your Notes
        </h3>
        <div className=" grid grid-flow-row-dense grid-cols-4 grid-rows-4 justify-center items-center my-3">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
