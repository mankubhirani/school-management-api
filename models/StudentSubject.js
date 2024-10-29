const db = require('../config/db');

// StudentSubject Model
class StudentSubject {
    static add(student_id, subject_id) {
        return new Promise((resolve, reject) => {
            db.query('CALL addStudentSubject(?, ?)', [student_id, subject_id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('CALL getAllStudentSubjects()', (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL getStudentSubjectById(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL deleteStudentSubject(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }
}

module.exports = StudentSubject;
