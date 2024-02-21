//auth.controller.js

const authService =  require("../services/auth.service")

class AuthController{

    constructor(authService) {
        this.authService = authService;
    }

    async registerUser(req, res) {
        try {
            const user = await this.authService.registerUser(req.body);
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
            const token = await this.authService.loginUser(req.body);
            res.cookie("accessToken", token).status(200).json({ message: 'Login successful!' })
        } catch (err) {
            res.status(500).json({message: 'Fatal Error!', error: err.message});
        }
    }

    async logoutUser(req, res){
        try {
            if(!req.cookies.accessToken){
                return res.status(401).json({ message: 'User not authenticated!' });
            }

            res.clearCookie("accessToken").status(200).json({ message: 'Logout successful!' })
        } catch (err) {
            res.status(500).json({message: 'Fatal Error!', error: err.message});
        }
    }
}

const authController = new AuthController(authService)

module.exports = authController;
