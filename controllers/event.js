const formidable = require("formidable");
const Event = require("../models/event");
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }
    // check for all fields
    const {
      eventName,
      eventId,
      userId,
      startDate,
      endDate,
      addressOne,
      city,
      state,
      country,
      zipCode,
      deliveryTime,
      pickupTime,
      primaryContactName,
      primaryContactNumber,
      secondaryContactName,
      secondaryContactNumber,
      comments,
      shippingNeeded,
      orderPlaced
    } = fields;

    if (
      !eventName ||
      !eventId ||
      !userId ||
      !startDate ||
      !endDate ||
      !addressOne ||
      !city ||
      !state ||
      !country ||
      !zipCode ||
      !shippingNeeded ||
      !orderPlaced
    ) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    let event = new Event(fields);

    event.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(result);
    });
  });
};

exports.eventHistory = (req, res) => {
  Event.find({ userId: req.profile._id })
    .populate("userId", "_id name")
    .sort("-created")
    .exec((err, events) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(events);
    });
};
