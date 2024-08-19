import React from 'react';

const Modal = ({ booking, onClose }) => {
    if (!booking) return null;

    const dates = Array.isArray(booking.dates) ? booking.dates.join(', ') : '';

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Booking Details</h2>
                <p><strong>Room:</strong> {booking.room}</p>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Number of People:</strong> {booking.people}</p>
                <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
                {/* <p><strong>Date:</strong> {dates}</p> */}
                <p><strong>Date(s):</strong> {dates}</p>
            </div>
        </div>
    );
};

export default Modal;
