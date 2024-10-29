const db = require('../config/db');

const Subject = {
    create: (data, callback) => {
        db.query('CALL createSubject(?, ?)', [data.name, data.description], callback);
    },
    getAll: (callback) => {
        db.query('CALL getAllSubjects()', callback);
    },
    getById: (id, callback) => {
        db.query('CALL getSubjectById(?)', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('CALL updateSubject(?, ?, ?)', [id, data.name, data.description], callback);
    },
    delete: (id, callback) => {
        db.query('CALL deleteSubject(?)', [id], callback);
    }
};

module.exports = Subject;
