const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      maxlength: 50
    },
    eventId: {
      type: String,
      required: true
    },
    userId: { type: ObjectId, ref: "User", required: true },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    addressOne: {
      type: String,
      maxlength: 50
    },
    city: {
      type: String,
      maxlength: 32
    },
    state: {
      type: String,
      maxlength: 32
    },
    country: {
      type: String,
      maxlength: 32
    },
    zipCode: {
      type: String,
      maxlength: 15
    },
    shippingNeeded: {
      required: true,
      type: Boolean
    },
    deliveryTime: {
      type: Date
    },
    pickupTime: {
      type: Date
    },
    primaryContactName: {
      type: String,
      required: true,
      maxlength: 50
    },
    primaryContactNumber: {
      type: String,
      required: true,
      maxlength: 15
    },
    secondaryContactName: {
      type: String,
      maxlength: 50
    },
    secondaryContactNumber: {
      type: String,
      maxlength: 15
    },
    comments: {
      type: String,
      maxlength: 150
    },
    orderPlaced: {
      required: true,
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
