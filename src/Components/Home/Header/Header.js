import React from 'react';
import MainMenu from '../../Shared/MainMenu/MainMenu';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <MainMenu />
            <div className="container">
                <div className="py-5 text-center content-box">
                    <h2 className="text-white">Welcome to Our Agency</h2>
                    <button className="btn-brand">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Header;