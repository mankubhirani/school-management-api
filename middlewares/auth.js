const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ auth: false, message: 'Invalid token.' });
        req.userId = decoded.id;
        next();
    });
};
