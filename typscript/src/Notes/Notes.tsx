import React from "react";
import "./notes.css";
//typealias
type NotesProps = {
  text: string;
};
const Notes = (props: NotesProps) => {
  return <div className="notes">{props.text}</div>;
};

export default Notes;
