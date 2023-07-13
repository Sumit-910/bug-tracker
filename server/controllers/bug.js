const { Bug } = require('../models');

const createBug = async (req, res, next) => {
    try {
        const {
            projectName,
            projectLink,
            bugName,
            bugDetails,
            priority,
            status,
            owner,
            assignedUsers
        } = req.body;

        if (!projectName || !projectLink || !bugName || !bugDetails || !priority || !assignedUsers) {
            res.status(400).json("Provide all the details");
            // throw new BadRequestError('Please provide all the details');
        }

        if (!status) {
            status = "pending";
        }

        //* saving details in the user model
        const bug = new Bug({
            projectName,
            projectLink,
            bugName,
            bugDetails,
            priority,
            owner,
            status,
            assignedTo: assignedUsers
        });

        //* saving the bug
        const savedBug = await bug.save();
        res.status(200).json(savedBug);

    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteBug = async (req, res, next) => {
    try {
        const { _id } = req.body;
        const deletedBug = await Bug.findByIdAndDelete({ _id });
        res.status(200).json(deletedBug)

    } catch (err) {
        res.status(500).json(err);
    }
}

const editBug = async (req, res, next) => {
    try {

        const editedBug = await Bug.findByIdAndUpdate(_id, req.body);
        res.status(200).json(editedBug);

    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllBugs = async (req, res, next) => {
    try {
        const bugs = await Bug.find();
        res.status(200).send(bugs);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createBug,
    deleteBug,
    editBug,
    getAllBugs
}