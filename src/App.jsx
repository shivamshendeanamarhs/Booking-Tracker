import React, { useState } from 'react';
import Grid from './components/Grid';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

const App = () => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleBookingClick = (booking) => {
    console.log('Booking details:', booking);
  };

  return (
    <Router>
      <div className="App container mt-5">
        <nav className="mb-4">
          <Link to="/">Grid</Link> | <Link to="/book">Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Grid bookings={bookings} onBookingClick={handleBookingClick} />} />
          <Route path="/book" element={<BookingForm addBooking={addBooking} bookings={bookings} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
