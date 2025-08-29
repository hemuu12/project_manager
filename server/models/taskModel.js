const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["todo", "in-progress", "done"], default: "todo" },
  dueDate: Date
});

module.exports = mongoose.model("Task", taskSchema);
