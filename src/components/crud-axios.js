import React, { useEffect, useState } from "react";
import axios from "axios";

const CRUDAxios = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        const getStudent = async () => {
            const res = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`);
            setStudent(res.data.map((el) => (
                { id: el.id, name: el.name, course: el.course, score: el.score }
            )));
        }
        getStudent();
    }, [])

    const handleEdit = () => {

    }
    const handleDelete = () => {
        
    }
    return (
        <>
            <h1>CRUD Axios</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Score</th>
                        <th>Index</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student !== null && (
                        student.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.score}</td>
                                <td>{item.score >= 80 ? 'A' : item.score >= 70 ? 'B' : item.score >= 60 ? 'C' : item.score >= 50 ? 'D' : 'E'}</td>
                                <td>
                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                                    <button onClick={handleDelete} value={item.id}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export default CRUDAxios;