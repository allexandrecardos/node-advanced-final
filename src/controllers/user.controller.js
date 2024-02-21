//user.controller.js
const userService =  require("../services/user.service")

class UserController{
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUser(req, res){
        try{
            const user = await this.userService.getAllUser();
            res.status(200).json({ user: user});
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async getUserById(req, res){
        try{
            const user = await this.userService.getUserById(req.params.id)
            res.status(200).json({ user: user})
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async deleteUser(req, res){
        try{
            await this.userService.deleteUser(req.params.id)
            res.status(200).json({ message: 'User deleted successful!'})
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async updateUser(req, res){
        try{
            await this.userService.updateUser(req.params.id, req.body)
            res.status(200).json({ message: 'User updated successful!'})
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }
   
}

const authController = new UserController(userService)

module.exports = authController;
