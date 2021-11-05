import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({});
    const [fileInfo, setFileInfo] = useState(' ');


    const handleBlur = (e) => {
        const newEmployee = {...employee};
        newEmployee[e.target.name] = e.target.value;
        setEmployee(newEmployee);
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFileInfo(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', fileInfo);
        formData.append('name', employee.name)
        formData.append('email', employee.email)
        formData.append('phone', employee.phone)


        fetch('https://arcane-spire-36173.herokuapp.com/addEmployee', {

            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <Container fluid>
            <div className="row">
                <div className="col-md-3 sidebar-background">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container data-table text-white">
                            <h1 className="text-center text-white">Add Employee</h1>
                            <div className="row">
                                <form onSubmit={handleSubmit} class="row g-3">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">Name</label>
                                        <input onBlur={handleBlur} type="text" class="form-control" name="name" required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="email" class="form-label">Email</label>
                                        <input onBlur={handleBlur} type="email" class="form-control" name="email" required />
                                    </div>
                                    <div class="col-md-3">
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input onBlur={handleBlur} type="number" class="form-control" name="phone" required />
                                    </div>
                                    <div class="col-6">
                                        <label for="file" class="form-label">Upload Image</label>
                                        <input onChange={handleChange} type="file" class="form-control" aria-label="file example" required />
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Add Employee</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    );
};

export default AddEmployee;