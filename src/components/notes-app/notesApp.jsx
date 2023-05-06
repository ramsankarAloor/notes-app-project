import React, { useState } from "react";
import './styles.css';
import Search from "../search";
import DisplayNote from "../display-note";
import { default as addNoteButton } from '../../assets/add-note-button.svg';
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
        },
        {   
            title: 'ffsedgwrtywsdfadf',
            body: 'asdgwretwerywh rfgvsfdhyutusdfa edfwr yfgbsdfvbdjyj sdjkdfg psedf sfruhfjeic orfgukdjdfyh dasdfasd fasdasaasdads dasdas dasdasda dashgfgfdr trdtrd trdtrtrdy 7tryredtyrd y7tryredt6rd  ytetrtrd  tetre65 trtre dasda dfdfgasdfasd asdfsaasdasd asdda sdasdd dasasdsd adsasdg hygggfgf dsasdsd dasdas asdads sda sdasdfasdf adsf adsfsdf  asdfasdf'
        },
        {   
            title: 'sdgsehsfbggharfh',
            body: 'dfawry eturydfjhs dfgaewr wytujrdths dfg'
        },
        {   
            title: '',
            body: 'fdfdasds dfsfhrtjfgnxcvbas igyfaksjdbcv kdskjfhisdf bolasidu0ahv'
        }
    ])


    const [filteredNotes, setFilteredNotes] = useState( [...noteObjectsArray] );

    const handleSearchQueryChange = (searchQuery) => {
        const  filteredNotes = noteObjectsArray.filter( (noteObject) => 
            (noteObject.title + noteObject.body).toLowerCase().includes(searchQuery.toLowerCase())
         );
         setFilteredNotes(filteredNotes);
    }

    const addNewNote = () => {
        setFilteredNotes(
            [
                { title: '', body: ''}, ...filteredNotes
            ]
        )
    }


    return (
        <div className="main-container">
            <div className="left-panel">
                <div className="add-note-button" onClick={addNewNote}>
                    <img src={addNoteButton}  alt="" />
                </div>
                {console.log(noteObjectsArray)}
            </div>
            <div className="right-panel">
                <div className="right-top">
                    <Search onSearchQueryChange={handleSearchQueryChange} />
                </div>
                <div className="right-app-title">
                    Notes
                </div>
                {
                   <DisplayNote notes={filteredNotes} />
                }
                
            </div>
        </div>
    )
}

export default NotesApp;