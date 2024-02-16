//user.controller.js
const userService =  require("../services/user.service")

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUser(req, res){
        try{
            const user = await this.userService.getAllUser()
            res.status(200).json(user)
        }catch(err){
            console.log(err);
        }
    }

    async getUserById(req, res){
        try{
            const user = await this.userService.getUserById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            console.log(err);
        }
    }

    async deleteUser(req, res){
        try{
            const user = await this.userService.deleteUser(req.params.id)
            res.status(200).json(user)
        }catch(err){
            console.log(err);
        }
    }

    async updateUser(req, res){
        try{
            const user = await this.userService.updateUser(req.params.id, req.body)
            res.status(200).json(user)
        }catch(err){
            console.log(err);
        }
    }
   
}

const authController = new UserController(userService)

module.exports = authController;
