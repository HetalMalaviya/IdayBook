import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
        <div className="px-6 py-4 my-3">
          <div className="font-bold text-xl mb-2">{note.title}</div>
          <p className="text-gray-700 text-base">{note.description}</p>
          <i className="fa-solid fa-trash mx-3 mt-8"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
