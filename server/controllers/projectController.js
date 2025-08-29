const projectService = require("../services/projectService");

exports.create = async (req, res) => {
  try {
    const project = await projectService.createProject(req.user, req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const projects = await projectService.getProjects(req.user);
  res.json(projects);
};

exports.update = async (req, res) => {
  const project = await projectService.updateProject(req.params.id, req.user, req.body);
  res.json(project);
};

exports.remove = async (req, res) => {
  await projectService.deleteProject(req.params.id, req.user);
  res.json({ message: "Deleted" });
};


exports.getOne = async (req, res) => {
  try {
    const project = await projectService.getProjectsById(req.params.id , req.user);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error });
  }
};