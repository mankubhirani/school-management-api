const db = require('../config/db');

const Student = {
    create: (data, callback) => {
        db.query('CALL createStudent(?, ?, ?, ?)', [data.name, data.age, data.roll_number, data.class_id], callback);
    },
    getAll: (callback) => {
        db.query('CALL getAllStudents()', callback);
    },
    getById: (id, callback) => {
        db.query('CALL getStudentById(?)', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('CALL updateStudent(?, ?, ?, ?, ?)', [id, data.name, data.age, data.roll_number, data.class_id], callback);
    },
    delete: (id, callback) => {
        db.query('CALL deleteStudent(?)', [id], callback);
    }
};

module.exports = Student;
