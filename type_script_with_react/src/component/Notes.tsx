type NotesText = {
  id: number;
  text: String;
};
const Notes = (props: NotesText) => {
  return (
    <div className="notes">
      <h1>Notes App</h1>
      <p>{props.text}</p>
      <p>{props.id}</p>
    </div>
  );
};

export default Notes;
