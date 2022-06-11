const userModel = require("../Schema/UserSchema");
const contentModel = require("../Schema/contentSchema");
const mongoose = require("mongoose");

const createcontent = async (req, res) => {
  try {
    const { message, title } = req.body;
    const getUser = await userModel.findById(req.params.id);
    const contentcreate = new contentModel({
      title,
      message,
    });
    contentcreate.user = getUser;
    contentcreate.save();

    getUser.content.push(mongoose.Types.ObjectId(contentcreate._id));
    getUser.save();

    res.status(200).json({
      message: "items has been created",
      data: contentcreate,
    });
  } catch (error) {
    res.status(404).json({
      status: "creation failed",
      message: error.message,
    });
  }
};

const singleallcontent = async (req, res) => {
  try {
    const singleallcontent = await userModel
      .findById(req.params.id)
      .populate("content");
    res.status(200).json({
      message: "items has been created",
      data: singleallcontent,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

const deleteallcontent = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user.isverify) {
      const deleteallcontent = await contentModel.findByIdAndDelete(
        req.params.content
      );

      user.content.pull(deleteallcontent);
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

const allcontent = async (req, res) => {
  try {
    const allcontent = await contentModel.find();

    res.status(201).json({
      message: "all",
      data: allcontent,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

const oneContent = async (req, res) => {
  try {
    const oneContent = await contentModel.findById(req.params.content);
    res.status(200).json({
      message: "items has been created",
      data: oneContent,
    });
  } catch (error) {
    res.status(404).json({
      status: "all failed",
      message: error.message,
    });
  }
};

module.exports = {
  createcontent,
  singleallcontent,
  deleteallcontent,
  allcontent,
  oneContent,
};
