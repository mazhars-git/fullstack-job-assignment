import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';



const Dashboard = () => {
    return (
        <section>
            <Container fluid>
                <div className="row">
                    <div className="col-md-3 sidebar-background">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                    
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Dashboard;