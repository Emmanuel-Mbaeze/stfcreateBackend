const express = require("express");
const router = express.Router();
const {
  createcontent,
  allcontent,
  singleallcontent,
  oneContent,
  deleteallcontent,
} = require("../Contoller/contentcontroller");

router.route("/create/:id").post(createcontent);
router.route("/:id").get(singleallcontent);
router.route("/").get(allcontent);
router.route("/:id/:content").get(oneContent).delete(deleteallcontent);

module.exports = router;
