const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contentSchema = new Schema(
  {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Content", contentSchema);
