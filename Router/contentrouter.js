const express = require("express");
const router = express.Router();
const { image } = require("../Connect/Multer");

const {
  createcontent,
  allcontent,
  singleallcontent,
  oneContent,
  deleteallcontent,
} = require("../Contoller/contentcontroller");

router.route("/create/:id").post(image, createcontent);
router.route("/:id").get(singleallcontent);
router.route("/all").get(allcontent);
router.route("/:id/:content").get(oneContent).delete(deleteallcontent);

module.exports = router;
