// user.service.js
const userDao = require('../daos/user.dao');

class UserService {

    constructor(userDao) {
        this.userDao = userDao;
    }

    async getAllUser(){
        return await this.userDao.getAllUser()
    }

    async getUserById(id){
        return await this.userDao.getUserById(id)
    }

    async deleteUser(id){
        return await this.userDao.deleteUser(id)
    }

    async updateUser(id, data){
        return await this.userDao.updateUser(id, data)
    }

}

const userService = new UserService(userDao)

module.exports = userService;
