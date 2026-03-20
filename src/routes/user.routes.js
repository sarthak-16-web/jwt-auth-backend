    import {Router} from 'express';
    import { VerifyJwt } from '../middlewares/auth.middleware.js';
    import userController from '../controllers/user.controller.js';
 
 const register =    userController.registerUser;
 const Login = userController.loginUser
 const logout = userController.logoutUser
 const profile = userController.currentUser
 const refreshToken = userController.refreshAccessToken
 const router = Router();

  router.route("/register").post(register);

router.route("/login").post(Login)
router.route("/logout").post(VerifyJwt , logout)   // aap kitne bhi middleware lga lo lekin next use kro kyuki router ko pata ho ki aage bhi jana hai 
router.route("/refreshToken").post(refreshToken)   
router.route("/profile").get(VerifyJwt , profile)   


 export default router;