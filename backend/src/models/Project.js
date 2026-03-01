const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: String,
    client: String,
    status: String,
    budget: Number,
    dueDate: Date,
    progress: Number,
    description: {
      type: String,
      default: ''
    },
    attachmentUrl: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// SQL stores structured rows in relational tables with joins.
// NoSQL (MongoDB) stores flexible JSON-like documents and is easier to evolve for dynamic fields.
module.exports = mongoose.model('Project', projectSchema);
