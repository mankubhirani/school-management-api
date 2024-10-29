const db = require('../config/db');

// Grade Model
class Grade {
    static add(student_id, subject_id, exam_id, grade) {
        return new Promise((resolve, reject) => {
            db.query('CALL InsertGrade(?, ?, ?, ?)', [student_id, subject_id, exam_id, grade], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('CALL getAllGrades()', (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL getGradeById(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static update(id, student_id, subject_id, exam_id, grade) {
        return new Promise((resolve, reject) => {
            db.query('CALL updateGrade(?, ?, ?, ?, ?)', [id, student_id, subject_id, exam_id, grade], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL deleteGrade(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }
}

module.exports = Grade;
