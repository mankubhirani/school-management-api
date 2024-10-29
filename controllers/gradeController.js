const Grade = require('../models/Grade');

// Add a grade
exports.addGrade = async (req, res) => {
    try {
        const { student_id, subject_id, exam_id, grade } = req.body;
        await Grade.add(student_id, subject_id, exam_id, grade);
        res.status(201).json({ message: 'Grade created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all grades
exports.getAllGrades = async (req, res) => {
    try {
        const grades = await Grade.getAll();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get grade by ID
exports.getGradeById = async (req, res) => {
    try {
        const { id } = req.params;
        const grade = await Grade.getById(id);
        if (grade.length === 0) return res.status(404).json({ message: 'Grade not found' });
        res.status(200).json(grade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a grade
exports.updateGrade = async (req, res) => {
    try {
        const { id } = req.params;
        const { student_id, subject_id, exam_id, grade } = req.body;
        await Grade.update(id, student_id, subject_id, exam_id, grade);
        res.status(200).json({ message: 'Grade updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a grade
exports.deleteGrade = async (req, res) => {
    try {
        const { id } = req.params;
        await Grade.delete(id);
        res.status(200).json({ message: 'Grade deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
