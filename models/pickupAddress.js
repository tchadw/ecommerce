const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const pickupAddressSchema = new mongoose.Schema(
  {
    eventId: { type: ObjectId, ref: "Event", required: true },
    addressOne: {
      type: String,
      required: true,
      maxlength: 50
    },
    city: {
      type: String,
      required: true,
      maxlength: 50
    },
    state: {
      type: String,
      required: true,
      maxlength: 30
    },
    zipCode: {
      type: String,
      maxlength: 15,
      required: true
    },
    country: {
      type: String,
      required: true,
      maxlength: 30
    },
    comments: {
      type: String,
      maxlength: 50
    },
    pickupTime: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("pickupAddress", pickupAddressSchema);
