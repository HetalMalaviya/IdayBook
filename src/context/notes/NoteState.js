import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const noteintial = [
    {
      _id: "631acb0ac9fd5942fb575b705",
      user: "6311d041a5fcbadb4cfe2339",
      title: "MyTitle",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-09T05:11:38.110Z",
      __v: 0,
    },
    {
      _id: "631akcd82c78f794c3670ba0e",
      user: "6311d041a5fcbadb4cfe2339",
      title: "MyTitle",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-09T05:22:10.090Z",
      __v: 0,
    },
    {
      _id: "6327fe9dhbc2f25ccb1588cd11",
      title: "new blog",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-19T05:31:09.632Z",
      __v: 0,
    },
    {
      _id: "631acb0ac9f59k42fb575b705",
      user: "6311d041a5fcbadb4cfe2339",
      title: "MyTitle",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-09T05:11:38.110Z",
      __v: 0,
    },
    {
      _id: "631acd82c78f79n4c3670ba0e",
      user: "6311d041a5fcbadb4cfe2339",
      title: "MyTitle",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-09T05:22:10.090Z",
      __v: 0,
    },
    {
      _id: "6327fe9dc2f25ccb158,8cd11",
      title: "new blog",
      description: " do your work fast",
      tag: "personal",
      date: "2022-09-19T05:31:09.632Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(noteintial);

  const addNote = (title, description, tag) => {
    console.log("adding new note");

    const note = {
      _id: "631acd82c12378f79n4c3670ba0e",
      user: "6311d041a5fcbadb4cfe23396",
      title: title,
      description: description,
      tag: tag,
      date: "2022-09-09T05:22:10.090Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };
  const deleteNote = () => {};
  const editNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
