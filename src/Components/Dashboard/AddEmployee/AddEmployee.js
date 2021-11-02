import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddEmployee = () => {
    return (
        <Container fluid>
            <div className="row">
                <div className="col-md-4 sidebar-background">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                <div className="container">
                        <div className="row">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="validationDefault01" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="validationDefault01" required />
                                </div>
                                <div class="col-md-6">
                                    <label for="validationDefault02" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="validationDefault02" required />
                                </div>
                                
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" required />
                                </div>
                                <div class="col-md-3">
                                    <label for="mobile" class="form-label">Phone Number</label>
                                    <input type="number" class="form-control" id="mobile" required />
                                </div>
                                <div class="col-6">
                                    <label for="file" class="form-label">Upload Image</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Add Review</button>
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