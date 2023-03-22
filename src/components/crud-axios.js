import React, { useEffect, useState } from "react";
import axios from "axios";

const CRUDAxios = () => {
    const [student, setStudent] = useState([]);
    const [inputName, setInputName] = useState("");
    const [inputCourse, setInputCourse] = useState("");
    const [inputScore, setInputScore] = useState(0);
    const [currentID, setCurrentID] = useState(null);

    useEffect(() => {
        const getStudent = async () => {
            const res = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`);
            setStudent(res.data.map((el) => (
                { id: el.id, name: el.name, course: el.course, score: el.score }
            )));
        }
        getStudent();
    }, [])

    const handleEdit = (e) => {
        let ID_STUDENT = e.target.value;
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENT}`)
            .then(res => {
                let data = res.data;
                setInputName(data.name);
                setInputCourse(data.course);
                setInputScore(data.score);
                setCurrentID(data.id);
            })
    }
    const handleDelete = (e) => {
        let ID_STUDENT = parseInt(e.target.value);
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENT}`)
            .then(res => {
                let data = res.data;
                setStudent(student.filter((item) => item.id !== ID_STUDENT))
            })
    }
    const handleSubmit = (e) => {
        if (currentID === null) {
            axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, { name: inputName, course: inputCourse, score: inputScore })
                .then((res) => {
                    let data = res.data
                    setStudent([...student, { id: data.id, name: data.name, course: data.course, score: data.score }])
                })
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentID}`, { name: inputName, course: inputCourse, score: inputScore })
                .then((res) => {
                    let updateStudent = student.find((el) => el.id === currentID)
                    updateStudent.name = inputName;
                    updateStudent.course = inputCourse;
                    updateStudent.score = inputScore;
                    setStudent([...student])
                })
        }
        setInputName("");
        setInputCourse("");
        setInputScore(0);
        setCurrentID(null);
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
            <h1>Student Form</h1>
            <fieldset>

                <form onSubmit={handleSubmit}>
                    <div className="formField">
                        <label htmlFor="nama">Name:</label>
                        <input required type="text" name="nama" value={inputName} onChange={e => setInputName(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="course">Course:</label>
                        <input required type="text" name="course" value={inputCourse} onChange={e => setInputCourse(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="score">Score:</label>
                        <input required type="number" name="score" value={inputScore} onChange={e => setInputScore(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label></label>
                        <button>Submit</button>
                    </div>
                </form>
            </fieldset>
        </>
    )
}

export default CRUDAxios;