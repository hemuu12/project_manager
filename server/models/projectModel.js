const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String
});

module.exports = mongoose.model("Project", projectSchema);
