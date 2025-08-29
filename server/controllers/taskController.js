const taskService = require("../services/taskService");

exports.create = async (req, res) => {
  const task = await taskService.createTask(req.params.projectId, req.body);
  res.status(201).json(task);
};

exports.getAll = async (req, res) => {
  const tasks = await taskService.getTasks(req.params.projectId);
  res.json(tasks);
};

exports.update = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.json(task);
};

exports.remove = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.json({ message: "Deleted" });
};
