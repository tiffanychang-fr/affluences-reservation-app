import axios from "axios";

class ReservationService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:8080",
    });
  }

  checkAvailability = (dateTime) => {
    return this.api.get(`/resource/1337/available?datetime=${dateTime}`); // 2021-11-04T12:00:00Z
  };
}

const reservationService = new ReservationService();

export default reservationService;
