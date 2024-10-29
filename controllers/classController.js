const Class = require('../models/class');

exports.createClass = (req, res) => {
    Class.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating class' });
        res.status(201).json({ message: 'Class created successfully!', classId: result[0][0].class_id });
    });
};

exports.getAllClasses = (req, res) => {
    Class.getAll((err, results) => {
        if (err) return res.status(500).json({ message: 'Error retrieving classes' });
        res.status(200).json(results[0]);
    });
};

exports.getClassById = (req, res) => {
    Class.getById(req.params.id, (err, result) => {
        if (err || result[0].length === 0) return res.status(404).json({ message: 'Class not found' });
        res.status(200).json(result[0][0]);
    });
};

exports.updateClass = (req, res) => {
    Class.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating class' });
        res.status(200).json({ message: 'Class updated successfully!' });
    });
};

exports.deleteClass = (req, res) => {
    Class.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting class' });
        res.status(200).json({ message: 'Class deleted successfully!' });
    });
};
