const mongoose = require("mongoose");
const userModel = require("../Schema/UserSchema");
const bookingModel = require("../Schema/bookingSchema");

const createbooking = async (req, res) => {
  try {
    const { message, location, fullname, title } = req.body;
    const getUser = await userModel.findById(req.params.id);
    const bookingcreate = new bookingModel({
      message,
      title,
      location,
      fullname,
    });
    bookingcreate.user = getUser;
    bookingcreate.save();

    getUser.booking.push(mongoose.Types.ObjectId(bookingcreate._id));
    getUser.save();

    res.status(200).json({
      message: "items has been created",
      data: bookingcreate,
    });
  } catch (error) {
    res.status(404).json({
      status: "creation failed",
      message: error.message,
    });
  }
};

const singleallbooking = async (req, res) => {
  try {
    const singleallbooking = await userModel
      .findById(req.params.id)
      .populate("booking");
    res.status(200).json({
      message: "items has been created",
      data: singleallbooking,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

const deleteallbooking = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user.isverify) {
      const deleteallbooking = await bookingModel.findByIdAndDelete(
        req.params.booking
      );

      user.booking.pull(deleteallbooking);
      user.save();

      res.status(204).json({});
    } else {
      res.status(404).json({
        message: "access denied",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

const allbooking = async (req, res) => {
  try {
    const allbooking = await bookingModel.find();

    res.status(201).json({
      message: "all",
      data: allbooking,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

const onebooking = async (req, res) => {
  try {
    const onebooking = await bookingModel.findById(req.params.booking);
    res.status(200).json({
      message: "items has been created",
      data: onebooking,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

module.exports = {
  createbooking,
  onebooking,
  allbooking,
  singleallbooking,
  deleteallbooking,
};
