import React from "react";
import { HashRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import NotesApp from "../notes-app";
import NotFound from "../not-found";
import LoginPage from "../login-page/loginPage";
import SignupPage from "../signup-page";

function LandingLayout(){

    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/notes' />} />
                <Route path='/notes' element={<NotesApp />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}

export default LandingLayout;