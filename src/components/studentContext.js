import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const [student, setStudent] = useState([]);
    const [inputName, setInputName] = useState("");
    const [inputCourse, setInputCourse] = useState("");
    const [inputScore, setInputScore] = useState(0);
    const [currentID, setCurrentID] = useState(null);
    
    return (
        <StudentContext.Provider value={{
            student,
            setStudent,
            inputName,
            setInputName,
            inputCourse,
            setInputCourse,
            inputScore,
            setInputScore,
            currentID, 
            setCurrentID
        }}>
            {props.children}
        </StudentContext.Provider>
    )

}
