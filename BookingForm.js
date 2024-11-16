import React from 'react';

function BookingForm() {
    return (
        <div>
            <h2>Book Your Trip</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Destination:
                    <input type="text" name="destination" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookingForm;
