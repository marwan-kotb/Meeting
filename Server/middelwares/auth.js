const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authentication failed, token missing or malformed" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Authentication failed. Invalid token.' });
    }
}

module.exports = auth