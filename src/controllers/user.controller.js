//user.controller.js
const Controller = require('./controller')
const userService =  require("../services/user.service")

class UserController extends Controller{
    constructor(userService) {
        super();
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

            const data = this.getBody()

            const user = await this.userService.updateUser(req.params.id, req.body)
            res.status(200).json(user)
        }catch(err){
            console.log(err);
        }
    }
   
}

const authController = new UserController(userService)

module.exports = authController;
