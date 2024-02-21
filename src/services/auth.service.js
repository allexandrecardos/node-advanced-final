// auth.service.js
const Service = require('./service')
const userDao = require('../daos/user.dao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class AuthService extends Service{

    constructor(userDao) {
        super()
        this.userDao = userDao;
    }

    async registerUser(data) {
        await this.isValidRequestUser(data)

        const salt = await this.genSalt(10);
        const hash = await this.genHash(data.password, salt);

        data.salt = salt;
        data.password = hash;

        return await this.userDao.createUser(data)
    }

    async genSalt(saltRounds) {
        return bcrypt.genSaltSync(saltRounds);
    }

    async genHash(password, salt) {
        return bcrypt.hashSync(password, salt);
    }

    async loginUser(data) {
        await this.isValidRequestLogin(data)

        const { username, password } = data;
        
        const user = await this.userDao.getUserByUsername(username);

        if(!user){
            throw new Error('User not found!');
        }

        const match = await this.comparePassword(password, user.password)

        if (!match) {
            throw new Error('Credentials Invalid!');
        }

        return await this.genToken(user.id, process.env.JWT_SECRET);
    }

    async comparePassword(password, userPassword) {
        return bcrypt.compareSync(password, userPassword)
    }

    async genToken(tokenSecret, tokenPrivate){
        return jwt.sign({
            userId: tokenSecret,
        }, tokenPrivate, { expiresIn: '1h' }, { algorithm: 'RS256' });
    }
}

const authService = new AuthService(userDao)

module.exports = authService;
