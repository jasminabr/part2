import { useState, useEffect } from "react";
import noteService from "./services/notes";
import "./index.css";
import Note from "./components/Note";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("Failed to fetch notes");
        setLoading(false);
      });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const addNote = (event) => {
    event.preventDefault();
    if (newNote.trim() === "") return;

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService
      .create(noteObject)
      .then((returnedNote) => {
        console.log("note created", returnedNote);
        setNotes(notes.concat(returnedNote));
        setNewNote("");
      })
      .catch((error) => {
        setErrorMessage("Failed to create note");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  if (loading) {
    return <div>Loading notes...</div>;
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
