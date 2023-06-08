import React, { useRef } from "react";
import './styles.css'

function NotePopup({ onOkClick, note, onCancelClick }) {    
    const titleRef = useRef();
    const noteRef = useRef();

    
    return (
        <div className="overlay">
            <div className="popup-note">
                <div ref={titleRef} className="popup-title-div" contentEditable="true" data-placeholder="Title"> 
                    {note.title}
                </div>
                <div ref={noteRef} className="popup-body-div" contentEditable="true" data-placeholder="Note">
                    {note.note}
                </div>
                <div className="button-div">
                    <button className="apply-button" onClick={() =>{ 
                        onOkClick( titleRef.current.innerText,  noteRef.current.innerText)
                        }}>Apply
                    </button>
                    <button className="cancel-button" onClick={onCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotePopup;