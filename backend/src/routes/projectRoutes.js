const express = require('express');
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', upload.single('attachment'), createProject);
router.put('/:id', upload.single('attachment'), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
