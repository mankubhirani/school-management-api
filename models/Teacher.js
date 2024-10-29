const db = require('../config/db');

// Teacher Model
class Teacher {
    static create(name, email, subject) {
        return new Promise((resolve, reject) => {
            db.query('CALL addTeacher(?, ?, ?)', [name, email, subject], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('CALL getAllTeachers()', (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL getTeacherById(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static update(id, name, email, subject) {
        return new Promise((resolve, reject) => {
            db.query('CALL updateTeacher(?, ?, ?, ?)', [id, name, email, subject], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('CALL deleteTeacher(?)', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }
}

module.exports = Teacher;
