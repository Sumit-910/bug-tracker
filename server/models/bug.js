const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true
    },
    bugName: {
        type: String,
        required: true,
        unique: true
    },
    bugDetails: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    owner: {
        type: String,
        required: true
    },
    assignedTo: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model("Bug", bugSchema);