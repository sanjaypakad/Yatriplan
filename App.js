import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Destinations from './Destinations';
import BookingForm from './BookingForm';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/booking" element={<BookingForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
