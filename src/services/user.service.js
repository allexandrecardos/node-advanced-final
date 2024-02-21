// user.service.js
const Service = require('./service');
const userDao = require('../daos/user.dao');
const bcrypt = require('bcrypt');

class UserService extends Service{

    constructor(userDao) {
        super();
        this.userDao = userDao;
    }

    async getAllUser(){
        const user = await this.userDao.getAllUser();
        await this.isResponseExists(user, 'User not found');
        return user;
    }

    async getUserById(id){
        const user = await this.userDao.getUserById(id);
        await this.isResponseExists(user, 'User not found');
        return user;
    }

    async deleteUser(id){
        const user = await this.userDao.deleteUser(id);
        await this.isResponseExists(user, 'User not found');
        return user;
    }

    async updateUser(id, data){
        const user = await this.getUserById(id);

        await this.isResponseExists(user, 'User not found');

        if(data.hasOwnProperty('password')){
            user.password = await this.updatePassword(data.password, user.salt);
        }

        user.save();

        return user;
    }

    async userIsAdmin(id){
        const user = await this.userDao.getUserById(id);
        return user.admin; 
    }

    async updatePassword(password, salt){
        return bcrypt.hashSync(password, salt);
    }
}

const userService = new UserService(userDao);

module.exports = userService;
