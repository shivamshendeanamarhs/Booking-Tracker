import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ addBooking, bookings }) => {
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');
    const [people, setPeople] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const navigate = useNavigate(); // Initialize navigate

    const isDateBooked = (room, startDate, endDate) => {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const datesArray = [];
        for (let d = startDateObj; d <= endDateObj; d.setDate(d.getDate() + 1)) {
            datesArray.push(d.getDate());
        }

        return bookings.some(booking =>
            booking.room === room &&
            datesArray.some(date => booking.dates.includes(date))
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDateBooked(room, startDate, endDate)) {
            alert('The selected room is already booked for the selected date(s). Please choose a different room or date.');
            return;
        }

        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const datesArray = [];
        for (let d = startDateObj; d <= endDateObj; d.setDate(d.getDate() + 1)) {
            datesArray.push(d.getDate());
        }

        addBooking({ room, name, people, paymentMethod, dates: datesArray });

        setRoom('');
        setName('');
        setPeople('');
        setPaymentMethod('');
        setStartDate('');
        setEndDate('');

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-group">
                <label htmlFor="room">Room:</label>
                <select id="room" value={room} onChange={(e) => setRoom(e.target.value)} required>
                    <option value="">Select a room</option>
                    <option value="ICU 1">ICU 1</option>
                    <option value="ICU 2">ICU 2</option>
                    <option value="ICU 3">ICU 3</option>
                    <option value="ICU 4">ICU 4</option>
                    <option value="ICU 5">ICU 5</option>
                    <option value="ICU 6">ICU 6</option>
                    <option value="ICU 7">ICU 7</option>
                    <option value="ICU 8">ICU 8</option>
                    <option value="ICU 9">ICU 9</option>
                    <option value="ICU 10">ICU 10</option>
                    <option value="ICU 11">ICU 11</option>
                    <option value="ICU 12">ICU 12</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="people">Number of People:</label>
                <input type="number" id="people" value={people} onChange={(e) => setPeople(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                    <option value="">Select a payment method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
