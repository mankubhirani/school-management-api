const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User registration
exports.register = (req, res) => {
    const { username, password, role, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.createUser({ username, password: hashedPassword, role, email }, (err, results) => {
        if (err) return res.status(500).send("Error while registering user.");
        res.status(201).send({ message: "User registered successfully!" });
    });
};

// User login
exports.login = (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, results) => {
        if (err || results.length === 0) return res.status(404).send("User not found.");

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET);
        res.status(200).send({ auth: true, token });
    });
};
