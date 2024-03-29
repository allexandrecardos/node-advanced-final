const { User, Products } = require('../models/index');

class UserDAO{

    constructor(User){
        this.User = User
    }

    async getAllUser(){
        return await this.User.findAll({
            attributes: ['id', 'username', 'email'],
        });
    }

    async getUserById(id){
        return await this.User.findOne({
            limit: 1,
            where: {
                id
            },
            include:[{
                model: Products,
                attributes: ['id', 'name', 'price']
            }]
        });
    }

    async getUserByUsername(username){
        return await this.User.findOne({
            attributes: ['id', 'salt', 'password'],
            limit: 1,
            where: {
                username
            }
        });
    }

    async createUser(data){
        return await this.User.create(data);
    }

    async deleteUser(id){
        return await this.User.destroy({
            where: {
                id
            }
        });
    }

    async updateUser(id, data){
        return await this.User.update(data,{
            where: {
                id
            }
        });
    }
}

const userDao = new UserDAO(User);

module.exports = userDao;