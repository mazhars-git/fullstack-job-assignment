import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../../../Css/AllEmployee.css';
import { Container } from 'react-bootstrap';


const AllEmployee = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/employees')
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])

    return (
        <section>
            <Container fluid>
                <div className="row">
                    <div className="col-md-3 sidebar-background">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 m-0 p-0">
                       <div className="data-table">
                            <h2 className="text-center text-white py-3">All Employess</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map((employee, index) => (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>                        
                    </div>
                </div>
            </Container>                      
        </section>
    );
};

export default AllEmployee;