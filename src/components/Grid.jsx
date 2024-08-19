import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Model';

const rooms = ['ICU 1', 'ICU 2', 'ICU 3', 'ICU 4', 'ICU 5', 'ICU 6', 'ICU 7', 'ICU 8', 'ICU 9', 'ICU 10', 'ICU 11', 'ICU 12'];
const dates = Array.from({ length: 31 }, (_, i) => i + 1);

const Grid = ({ bookings, onBookingClick }) => {
    const isBooked = (room, date) => {
        return bookings.find(booking => booking.room === room && booking.dates.includes(date));
    };

    const [selectedBooking, setSelectedBooking] = React.useState(null);

    const handleBookingClick = (room, date) => {
        const booking = bookings.find(b => b.room === room && b.dates.includes(date));
        if (booking) {
            setSelectedBooking(booking);
        }
    };

    const handleCloseModal = () => {
        setSelectedBooking(null);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date \ Room</th>
                                {dates.map(date => (
                                    <th key={date}>{date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room}>
                                    <td className="room-column">{room}</td>
                                    {dates.map(date => (
                                        <td
                                            key={date}
                                            className={isBooked(room, date) ? 'bg-success text-white cursor-pointer' : 'available cursor-pointer'}
                                            onClick={() => isBooked(room, date) && handleBookingClick(room, date)}
                                        >
                                            {isBooked(room, date) ? 'Booked' : 'Available'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedBooking && <Modal booking={selectedBooking} onClose={handleCloseModal} />}
                </div>
            </div>
        </div>
    );
};

export default Grid;
