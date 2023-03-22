import React from "react";
import CRUDAxiosContext from "./crud-axios-context";
import CRUDAxios from "./crud-axios";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { StudentProvider } from "./studentContext";

const Routers = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={
                    <StudentProvider>
                        <CRUDAxiosContext />
                    </StudentProvider>
                } />
                <Route path="/crud-axios" element={<CRUDAxios />} />
            </Routes>
        </Router>
    )
}

const Nav = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">CRUD Axios Context</Link>
                </li>
                <li>
                    <Link to="/crud-axios">CRUD Axios</Link>
                </li>
            </ul>
        </>
    )
}

export default Routers