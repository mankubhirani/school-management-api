const Attendance = require('../models/attendance');

exports.createAttendance = (req, res) => {
    Attendance.create(req.body, (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(201).json({ message: 'Attendance created successfully', data: results });
    });
};

exports.getAllAttendance = (req, res) => {
    Attendance.getAll((error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ data: results[0] });
    });
};

exports.getAttendanceById = (req, res) => {
    Attendance.getById(req.params.id, (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ data: results[0] });
    });
};

exports.updateAttendance = (req, res) => {
    Attendance.update(req.params.id, req.body, (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ message: 'Attendance updated successfully' });
    });
};

exports.deleteAttendance = (req, res) => {
    Attendance.delete(req.params.id, (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ message: 'Attendance deleted successfully' });
    });
};
