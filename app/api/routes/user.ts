import UserController from "../controllers/auth";
import { Router } from "express";
import { Auth } from "../middlewares/auth";

// validation middleware
import validatorHandler from '../middlewares/validatorHandler';
import createUserSchema from '../utils/userValidation';


const userRouter = Router();

// register a user
userRouter.post('/register',validatorHandler(createUserSchema),UserController.register);
userRouter.post('/login', UserController.login)
userRouter.get('/',Auth, UserController.getUser)

export default userRouter;

