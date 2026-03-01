const Project = require('../models/Project');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.status(200).json({ data: projects });
});

const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.status(200).json({ data: project });
});

const createProject = asyncHandler(async (req, res) => {
  const attachmentUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const project = await Project.create({
    ...req.body,
    attachmentUrl
  });

  res.status(201).json({
    message: 'Project created successfully',
    data: project
  });
});

const updateProject = asyncHandler(async (req, res) => {
  const currentProject = await Project.findById(req.params.id);

  if (!currentProject) {
    throw new ApiError(404, 'Project not found');
  }

  const payload = { ...req.body };
  if (req.file) {
    payload.attachmentUrl = `/uploads/${req.file.filename}`;
  }

  const updated = await Project.findByIdAndUpdate(currentProject._id, payload, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    message: 'Project updated successfully',
    data: updated
  });
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.status(200).json({
    message: 'Project deleted successfully'
  });
});

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
