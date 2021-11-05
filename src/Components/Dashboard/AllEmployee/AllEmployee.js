import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../../../Css/AllEmployee.css';


const AllEmployee = () => {
    const data = [
        {
            name: 'James',
            email: 'jams21@gmail.com',
            phone: '+00124563'
        },
        {
            name: 'Zakee',
            email: 'zakee22@gmail.com',
            phone: '+001554463'
        },
        {
            name: 'Nadim',
            email: 'nadim23@gmail.com',
            phone: '+00222563'
        },
        {
            name: 'Kaniz',
            email: 'kaniz021@gmail.com',
            phone: '+00124443'
        }
    ]

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/employees')
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])

    return (
        <section>
            <div class="container">
                <div className="row">
                    <div className="col-md-3 sidebar-background">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 employee-table">
                        <h2>All Employess</h2>

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
            
        </section>
    );
};

export default AllEmployee;