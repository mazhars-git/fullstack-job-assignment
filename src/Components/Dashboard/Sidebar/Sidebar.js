import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faGripHorizontal, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../Css/Sidebar.css';

const Sidebar = () => {
    return (
    <Container>
        <div className="row sidebar-area pt-2">
            <div className="py-4 sidebar">
                <div className="text-white pt-5">
                    <ul>
                        <li><a href="/employees"><FontAwesomeIcon className="icon" icon={faUsers} /> Employees</a></li>
                        <li><a href="/addReview"><FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add Review</a></li>
                        <li><a href="/addEmployee"><FontAwesomeIcon className="icon" icon={faUserPlus} /> Add Employee</a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faGripHorizontal} /> Manager</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-5 my-5 back-btn text-center">
                <a href="/"><FontAwesomeIcon className="icon" icon={faSignOutAlt} />Back To Home</a>
            </div>
        </div>
    </Container>
    );
};

export default Sidebar;