//auth.controller.js
const Controller = require('./controller')
const authService =  require("../services/auth.service")

class AuthController extends Controller{

    constructor(authService) {
        super()
        this.authService = authService;
    }

    async registerUser(req, res) {
        try {
            const data = await this.isBodyValid(req.body)
            const user = await this.authService.registerUser(data);
            res.status(201).json({
                message: 'User created successful!',
                user,
            })
        } catch (err) {
            res.status(500).json({message: 'Fatal Error!', error: err.message});
        }
    }

    async loginUser(req, res){
        try {
            const data = await this.isBodyValid(req.body)
            const token = await this.authService.loginUser(data);
            res.cookie("accessToken", token).status(200).json({ message: 'Login successful!' })
        } catch (err) {
            res.status(500).json({message: 'Fatal Error!', error: err.message});
        }
    }

    async logoutUser(req, res){
        try {
            if(!req.cookies.accessToken){
                
            }

            res.clearCookie("accessToken").status(200).json({ message: 'Logout successful!' })
        } catch (err) {
            res.status(500).json({message: 'Fatal Error!', error: err.message});
        }
    }
}

const authController = new AuthController(authService)

module.exports = authController;
