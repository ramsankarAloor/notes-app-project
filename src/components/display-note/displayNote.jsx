import React, { useState } from "react";
import './styles.css'
import NotePopup from "../note-popup";

function DisplayNote({notes}){

    const [ activePopupIndex, setActivePopupIndex ] = useState(-1);


    return(
        <div className="right-body">
            {
                notes?.map((noteObject, index) => 
                    <div className="note" onClick={()=>setActivePopupIndex(index)}>
                            <div className="note-title">
                                <h3>{noteObject.title}</h3>
                            </div>
                            <div className="note-body">
                                <p> {noteObject.body}</p>
                            </div>
                    </div>    
                )
            }
            {
                activePopupIndex !== -1 && 
                <NotePopup notes={notes} activePopupIndex={activePopupIndex} setActivePopupIndex={setActivePopupIndex} />
            }
        </div>
    )
}

export default DisplayNote;