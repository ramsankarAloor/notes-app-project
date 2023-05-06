import React, { useState } from "react";
import './styles.css'

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
                <div className="overlay">
                    <div className="popup-note">
                        <div className="popup-titile-div" contentEditable="true"  data-placeholder="Title">
                            <h3>{notes[activePopupIndex].title}</h3>
                        </div>
                        <div className="popup-body-div" contentEditable="true">
                            <p>{notes[activePopupIndex].body}</p>
                        </div>
                        <div className="close-button-div">
                            <button className="close-button" onClick={()=>setActivePopupIndex(-1)}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DisplayNote;