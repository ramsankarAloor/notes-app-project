import React, { useState } from "react";
import './styles.css';
import DisplayNoteHeadings from "../display-note";
import Search from "../search";

function NotesApp() {

    const [noteObjectsArray, setNoteObjectsArray] = useState([
        {
            title: '13 reasons why',
            body: 'A popular young adult novel that has also been adapted to a Netflix series'
        },
        {
            title: 'Old monk',
            body: 'Monday chandrante divasam aanenna paraya'
        },
        {
            title: 'Tuesday',
            body: 'chovvazhcahkk chovva dosham undo'
        },
        {
            title: 'Wednesday',
            body: 'wednesday oru series nte matram peralla'
        }
    ])

    const [isNoteOpen, setIsNoteOpen] = useState(false);

    function openNotes() {
        setIsNoteOpen(true);
    }
    return (
        <div className="main-container">
            <div className="left-panel">
                <div className="add-note-button">
                    <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#1a1c1c" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus"> <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </div>
            </div>
            <div className="right-panel">
                <div className="right-top">
                    <Search />
                </div>
                <div className="right-app-title">
                    Notes
                </div>
                <div className="right-body">

                </div>
            </div>
        </div>
    )
}

export default NotesApp;