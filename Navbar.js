import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Yatriplan</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/booking">Booking</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

