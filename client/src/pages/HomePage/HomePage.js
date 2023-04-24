import "./HomePage.css";
import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import reservationService from "../../services/reservation.service";

function HomePage() {
  // need to modify the date-time data format
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState("");

  useEffect(() => {
    reservationService
      .checkAvailability(value)
      .then((response) => {
        console.log("Check availability", response.data);
        setMessage(response.data);
      })
      .catch((error) => console.log(error));
  }, [value]);

  return (
    <div>
      <h1>Affluences</h1>
      <h3>Check if the resource is available</h3>
      <div>
        <DateTimePicker onChange={onChange} value={value} />
      </div>
      <button>Check availability</button>
      <p>{message}</p>
      {/* show the message of true/ false or personalized message*/}
    </div>
  );
}

export default HomePage;
