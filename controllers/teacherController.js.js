const Teacher = require('../models/Teacher');

// Create a new teacher
exports.addTeacher = async (req, res) => {
    try {
        const { name, email, subject } = req.body;
        const result = await Teacher.create(name, email, subject);
        res.status(201).json({ message: 'Teacher created successfully', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.getAll();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.getById(id);
        if (teacher.length === 0) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a teacher
exports.updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, subject } = req.body;
        await Teacher.update(id, name, email, subject);
        res.status(200).json({ message: 'Teacher updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        await Teacher.delete(id);
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
