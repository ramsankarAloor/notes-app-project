import React from "react";
import './styles.css'

function NotePopup({notes, activePopupIndex, setActivePopupIndex}) {

    return (
        <div className="overlay">
            <div className="popup-note">
                <div className="popup-titile-div" contentEditable="true" data-placeholder="Title">
                    <h3>{notes[activePopupIndex].title}</h3>
                </div>
                <div className="popup-body-div" contentEditable="true">
                    <p>{notes[activePopupIndex].body}</p>
                </div>
                <div className="close-button-div">
                    <button className="close-button" onClick={() => setActivePopupIndex(-1)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default NotePopup;