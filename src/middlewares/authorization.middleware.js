const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const authorizationMiddleware = async (req, res, next) => {
    try {

        if(req.method === 'GET'){
            next();
        }

        const userId = req.user.userId;
        const isAdmin = await userService.userIsAdmin(userId);

        if (!isAdmin) {
            return res.status(401).json({ message: 'Unauthorized: User is not an admin' });
        }

        next();
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error', error: err.message});
    }
}

module.exports = authorizationMiddleware;
