const db = require('../config/db');

const Attendance = {
    create: (attendance, callback) => {
        const sql = 'CALL CreateAttendance(?, ?, ?, ?)';
        db.query(sql, [attendance.student_id, attendance.class_id, attendance.date, attendance.status], callback);
    },

    getAll: (callback) => {
        const sql = 'CALL GetAllAttendance()';
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = 'CALL GetAttendanceById(?)';
        db.query(sql, [id], callback);
    },

    update: (id, attendance, callback) => {
        const sql = 'CALL UpdateAttendance(?, ?, ?, ?, ?)';
        db.query(sql, [id, attendance.student_id, attendance.class_id, attendance.date, attendance.status], callback);
    },

    delete: (id, callback) => {
        const sql = 'CALL DeleteAttendance(?)';
        db.query(sql, [id], callback);
    }
};

module.exports = Attendance;
