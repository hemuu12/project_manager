const Project = require("../models/projectModel");

exports.createProject = async (userId, data) => {
  return await Project.create({ ...data, userId });
};

exports.getProjects = async (userId) => {
  return await Project.find({ userId });
};

exports.updateProject = async (id, userId, data) => {
  return await Project.findOneAndUpdate({ _id: id, userId }, data, { new: true });
};

exports.deleteProject = async (id, userId) => {
  return await Project.findOneAndDelete({ _id: id, userId });
};

exports.getProjectsById=async(id , userId)=>{
  return await Project.findById({_id:id , userId})
}