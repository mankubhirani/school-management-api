const Subject = require('../models/subject');

exports.createSubject = (req, res) => {
    Subject.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating subject' });
        res.status(201).json({ message: 'Subject created successfully!', subjectId: result[0][0].subject_id });
    });
};

exports.getAllSubjects = (req, res) => {
    Subject.getAll((err, results) => {
        if (err) return res.status(500).json({ message: 'Error retrieving subjects' });
        res.status(200).json(results[0]);
    });
};

exports.getSubjectById = (req, res) => {
    Subject.getById(req.params.id, (err, result) => {
        if (err || result[0].length === 0) return res.status(404).json({ message: 'Subject not found' });
        res.status(200).json(result[0][0]);
    });
};

exports.updateSubject = (req, res) => {
    Subject.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating subject' });
        res.status(200).json({ message: 'Subject updated successfully!' });
    });
};

exports.deleteSubject = (req, res) => {
    Subject.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting subject' });
        res.status(200).json({ message: 'Subject deleted successfully!' });
    });
};
