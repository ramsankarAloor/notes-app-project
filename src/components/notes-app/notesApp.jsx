import React, { useEffect, useState } from "react";
import "./styles.css";
import Search from "../search";
import DisplayNote from "../display-note";
import { default as addNoteButton } from "../../assets/add-note-button.svg";
import handleNotes from "../../api/notesApi";
import NotePopup from "../note-popup";
import handleCreate from "../../api/createNoteApi";

const url = "http://localhost:4000/private/notes";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    async function toGetNotes() {
      const notes = await handleNotes();
      setNotes([...notes]);
    }
    toGetNotes();
  }, [notes]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const createNote = async(title, note) => {
    const newNote = await handleCreate(title, note)
    const notesAfter = [...notes, newNote.data.data[0]]
    setNotes(notesAfter)
    setIsPopupOpen(false)
  }

  return (
    <div className="main-container">
      <div className="left-panel">
        <div className="add-note-button" 
          onClick={() => {
            setIsPopupOpen(true)
            }}
        >
          <img src={addNoteButton} alt="" />
        </div>
        { isPopupOpen && 
            <NotePopup onOkClick={createNote} note={{ }} onCancelClick={()=>setIsPopupOpen(false)}/>
        }
      </div>

      <div className="right-panel">
        <div className="right-top">
          <Search onSearchQueryChange={handleSearchQueryChange} />
        </div>
        <div className="right-app-title">Notes</div>
        {
          <DisplayNote
            notes={notes.filter((e) =>
              (e.title + e.note)
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )}
            setNotes={setNotes}
          />
        }
      </div>
    </div>
  );
}

export default NotesApp;
