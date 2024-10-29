const StudentSubject = require('../models/StudentSubject');

// Add a student-subject relationship
exports.addStudentSubject = async (req, res) => {
    try {
        const { student_id, subject_id } = req.body;
        await StudentSubject.add(student_id, subject_id);
        res.status(201).json({ message: 'Student-subject relationship created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all student-subject relationships
exports.getAllStudentSubjects = async (req, res) => {
    try {
        const studentSubjects = await StudentSubject.getAll();
        res.status(200).json(studentSubjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get student-subject by ID
exports.getStudentSubjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const studentSubject = await StudentSubject.getById(id);
        if (studentSubject.length === 0) return res.status(404).json({ message: 'Student-subject relationship not found' });
        res.status(200).json(studentSubject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete student-subject relationship
exports.deleteStudentSubject = async (req, res) => {
    try {
        const { id } = req.params;
        await StudentSubject.delete(id);
        res.status(200).json({ message: 'Student-subject relationship deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
