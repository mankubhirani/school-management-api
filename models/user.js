const db = require('../config/db');

const User = {
    findByUsername: (username, callback) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], callback);
    },
    createUser: (userData, callback) => {
        db.query('INSERT INTO users SET ?', userData, callback);
    },
};

module.exports = User;
