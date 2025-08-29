const Task = require("../models/taskModel");

exports.createTask = async (projectId, data) => {
  return await Task.create({ ...data, projectId });
};

exports.getTasks = async (projectId) => {
  return await Task.find({ projectId });
};

exports.updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
