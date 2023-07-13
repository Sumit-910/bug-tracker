const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true
    },
    projectDetails: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    assignedTo: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);