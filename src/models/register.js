const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  domain: [
    {
      type: String,
      required: true,
    },
  ],
  kiitemail: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  yearOfStudy: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  links: {
    Github: { type: String },
    Linkedin: { type: String },
    Drive: { type: String },
  },
  existSocieties: {
    type: String,
    default: "Not Yet",
  },
  whyElabs: {
    type: String,
    required: true,
  },
  anythingElse: {
    type: String,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("register", registerSchema);
