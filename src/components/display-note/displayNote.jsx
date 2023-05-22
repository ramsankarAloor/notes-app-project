import React, { useState } from "react";
import "./styles.css";
import NotePopup from "../note-popup";
import handleUpdates from "../../api/updateNoteApi";
import handleDelete from "../../api/deleteNoteApi";
function DisplayNote({ notes, setNotes }) {
  const [activePopupIndex, setActivePopupIndex] = useState(-1);
  const [isThreeDotsVisible, setIsThreeDotsVisible] = useState(-1);
  const [dropDown, setDropDown] = useState(-1);

  async function updateNote(title, note) {
    const updatedNoteVal = {
      ...notes[activePopupIndex],
      title,
      note,
    };
    await handleUpdates(updatedNoteVal);
    const updatedNotes = [...notes];
    updatedNotes[activePopupIndex] = updatedNoteVal;
    setNotes(updatedNotes);
    setActivePopupIndex(-1);
  }

  async function deleteNote(id){
	await handleDelete(id)
  }

  return (
    <div className="right-body">
      {notes?.map((noteObject, index) => (
        <div
          key={noteObject.id}
          className="note"
          onClick={() => setActivePopupIndex(index)}
          onMouseEnter={() => setIsThreeDotsVisible(index)}
          onMouseLeave={() => {
            setIsThreeDotsVisible(-1);
          }}
        >
          {isThreeDotsVisible === index && (
            <div>
              <div
                className="three-dots"
                onClick={(event) => {
                  setDropDown(index);
                  event.stopPropagation();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="25">
                  <circle cx="5" cy="5" r="2.1" fill="#C0C0C0" />
                  <circle cx="5" cy="13" r="2.1" fill="#C0C0C0" />
                  <circle cx="5" cy="21" r="2.1" fill="#C0C0C0" />
                </svg>
              </div>
              {dropDown === index && (
                <div
                  className="drop-down-content"
                  onMouseLeave={() => setDropDown(-1)}
				  onClick={(event)=>{
					deleteNote(noteObject.id)
					setDropDown(-1)
					event.stopPropagation()
				}}
                >
                  Delete
                </div>
              )}
            </div>
          )}

          <div className="note-title">
            <h3>{noteObject.title}</h3>
          </div>
          <div className="note-body">
            <p> {noteObject.note}</p>
          </div>
        </div>
      ))}
      {activePopupIndex !== -1 && (
        <NotePopup
          onOkClick={updateNote}
          note={notes[activePopupIndex]}
          onCancelClick={() => setActivePopupIndex(-1)}
        />
      )}
    </div>
  );
}

export default DisplayNote;
