const express = require("express");
const router = express.Router();
const {
  createbooking,
  allbooking,
  onebooking,
  deleteallbooking,
  singleallbooking,
} = require("../Contoller/bookingController");

router.route("/create/:id").post(createbooking);
router.route("/:id").get(singleallbooking);
router.route("/").get(allbooking);
router.route("/:id/:booking").get(onebooking).delete(deleteallbooking);

module.exports = router;
