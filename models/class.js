const db = require('../config/db');

const Class = {
    create: (data, callback) => {
        db.query('CALL createClass(?, ?)', [data.class_name, data.section], callback);
    },
    getAll: (callback) => {
        db.query('CALL getAllClasses()', callback);
    },
    getById: (id, callback) => {
        db.query('CALL getClassById(?)', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('CALL updateClass(?, ?, ?)', [id, data.class_name, data.section], callback);
    },
    delete: (id, callback) => {
        db.query('CALL deleteClass(?)', [id], callback);
    }
};

module.exports = Class;
