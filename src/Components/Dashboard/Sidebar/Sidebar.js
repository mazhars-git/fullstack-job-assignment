import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faGripHorizontal, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Sidebar = () => {
    return (
    <Container>
        <div className="py-4">
            <div className="text-white">
                <a href="#"> <FontAwesomeIcon icon={faCoffee} /> Welcome to Dashboard!! </a>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faUsers} /> Employees</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPlusSquare} /> Add Review</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUserPlus} /> Add Employee</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faGripHorizontal} /> Manager</a></li>
                </ul>
            </div>
        </div>
        <div>
            <a href="/home"><FontAwesomeIcon icon={faSignOutAlt} />Back To Home</a>
        </div>
    </Container>
    );
};

export default Sidebar;