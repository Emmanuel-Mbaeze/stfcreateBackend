const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema(
  {
    location: {
      type: String,
    },
    message: {
      type: String,
    },
    fullname: {
      type: String,
    },
    title: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
