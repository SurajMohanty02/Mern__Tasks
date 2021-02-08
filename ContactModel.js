const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    range: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("contact", userSchema);
