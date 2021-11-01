import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Add Review</a></li>
                    <li><a href="#">Add Employee</a></li>
                    <li><a href="#">Manager</a></li>
                </ul>
            </div>
        </div>
    </Container>
    );
};

export default Sidebar;