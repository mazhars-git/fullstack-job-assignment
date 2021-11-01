import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {
    return (
        <section>
            <Container fluid>
                <div className="row">
                    <div className="col-md-4 bg-dark">
                        <Sidebar />
                    </div>

                    <div className="col-md-8">
                    
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Dashboard;