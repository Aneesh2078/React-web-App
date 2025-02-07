import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

function Account() {
    const [students, setStudents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newStudent, setNewStudent] = useState({
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        grade: "",
        address: ""
    });

    const [editStudent, setEditStudent] = useState(null);
    const [errors, setErrors] = useState({});
    const [studentId, setStudentId] = useState("");
    const [fetchedStudent, setFetchedStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        axios.get("http://91.203.132.60:9080/api/students")
            .then((response) => setStudents(response.data))
            .catch((error) => console.error("Error fetching students data: ", error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errors = {};
        if (!newStudent.first_name) errors.first_name = "First name is required";
        if (!newStudent.last_name) errors.last_name = "Last name is required";
        if (!newStudent.age) errors.age = "Age is required";
        if (!newStudent.email) errors.email = "Email is required";
        if (!newStudent.grade) errors.grade = "Grade is required";
        if (!newStudent.address) errors.address = "Address is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            if (isEditing) {
                axios.put(`http://91.203.132.60:9080/api/students/${editStudent.id}`, newStudent)
                    .then(() => {
                        fetchStudents();
                        resetFormState();
                    })
                    .catch((error) => {
                        console.error("Error editing student: ", error);
                    });
            } else {
                axios.post("http://91.203.132.60:9080/api/students", newStudent)
                    .then(() => {
                        fetchStudents();
                        resetFormState();
                    })
                    .catch((error) => {
                        console.error("Error adding new student: ", error);
                    });
            }
        }
    };

    const handleFetchById = () => {
        axios.get(`http://91.203.132.60:9080/api/students/${studentId}`)
            .then((response) => {
                setFetchedStudent(response.data);
            })
            .catch((error) => {
                console.error("Error fetching student by ID: ", error);
                setFetchedStudent(null);
            });
    };

    const handleEdit = (student) => {
        setNewStudent(student);
        setShowForm(true);
        setIsEditing(true);
        setEditStudent(student);
    };

    const handleDelete = (id) => {
        axios.delete(`http://91.203.132.60:9080/api/students/${id}`)
            .then(() => fetchStudents())
            .catch((error) => {
                console.error("Error deleting student: ", error);
            });
    };

    const resetFormState = () => {
        setNewStudent({
            first_name: "",
            last_name: "",
            age: "",
            email: "",
            grade: "",
            address: ""
        });
        setErrors({});
        setShowForm(false);
        setIsEditing(false);
        setEditStudent(null);
    };

    return (
        <div>
            <style>
                {`
                    tr, td, th {
                        padding: 10px;
                        border: 1px solid black;
                        text-align: center;
                        border-collapse: collapse;
                    }
                    table {
                        margin: auto;
                    }
                `}
            </style>
            <Header />
            
            <button onClick={() => setShowForm(true)}>Add Student</button>
            {showForm && (
                <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="first_name" value={newStudent.first_name} onChange={handleChange} />
                        {errors.first_name && <span style={{ color: "red" }}>{errors.first_name}</span>}
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="last_name" value={newStudent.last_name} onChange={handleChange} />
                        {errors.last_name && <span style={{ color: "red" }}>{errors.last_name}</span>}
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="text" name="age" value={newStudent.age} onChange={handleChange} />
                        {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" value={newStudent.email} onChange={handleChange} />
                        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Grade: </label>
                        <input type="text" name="grade" value={newStudent.grade} onChange={handleChange} />
                        {errors.grade && <span style={{ color: "red" }}>{errors.grade}</span>}
                    </div>
                    <div>
                        <label>Address: </label>
                        <input type="text" name="address" value={newStudent.address} onChange={handleChange} />
                        {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
                    </div>
                    <button type="submit">{isEditing ? "Update" : "Submit"}</button>
                </form>
            )}

            <div style={{ marginTop: "20px" }}>
                <label>Enter Student ID to fetch details: </label>
                <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <button onClick={handleFetchById}>Fetch by ID</button>
            </div>

            {fetchedStudent && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Student Details</h3>
                    <p>ID: {fetchedStudent.id}</p>
                    <p>Name: {fetchedStudent.first_name} {fetchedStudent.last_name}</p>
                    <p>Age: {fetchedStudent.age}</p>
                    <p>Email: {fetchedStudent.email}</p>
                    <p>Grade: {fetchedStudent.grade}</p>
                    <p>Address: {fetchedStudent.address}</p>
                </div>
            )}

            <table border="1px solid black">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Grade</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.first_name} {student.last_name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                            <td>{student.address}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button onClick={() => handleEdit(student)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Account;
