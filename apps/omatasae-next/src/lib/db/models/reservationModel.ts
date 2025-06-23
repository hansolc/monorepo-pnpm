import { Schema, model, models } from "mongoose";

const reservationSchema = new Schema({
  link: {
    type: String,
    required: [true, "Please provide links"],
  },
  peopleCount: {
    type: Number,
    required: [true, "Please provide number of people"],
  },
  state: {
    type: String,
    required: [true, "Please provide state of reservation"],
  },
  primaryDate: {
    type: String,
    required: [true, "Please provide reservation primary date, time"],
  },
  secondaryDate: {
    type: String,
  },
  tertiaryDate: {
    type: String,
  },
});

const Reservation =
  models.reservations || model("reservations", reservationSchema);

export default Reservation;
