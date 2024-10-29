const Student = require('../models/student');

exports.createStudent = (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating student' });
        res.status(201).json({ message: 'Student created successfully!', studentId: result[0][0].student_id });
    });
};

exports.getAllStudents = (req, res) => {
    Student.getAll((err, results) => {
        if (err) return res.status(500).json({ message: 'Error retrieving students' });
        res.status(200).json(results[0]);
    });
};

exports.getStudentById = (req, res) => {
    Student.getById(req.params.id, (err, result) => {
        if (err || result[0].length === 0) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(result[0][0]);
    });
};

exports.updateStudent = (req, res) => {
    Student.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating student' });
        res.status(200).json({ message: 'Student updated successfully!' });
    });
};

exports.deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting student' });
        res.status(200).json({ message: 'Student deleted successfully!' });
    });
};
