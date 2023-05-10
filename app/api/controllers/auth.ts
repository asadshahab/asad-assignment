// import the user model
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';

// import bcrypt fun from common
import { encryptPassword, comparePassword } from '../common/bcrypt';
// import jwt fun from common
import  {generateToken}  from '../common/jwt';

export default class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            let {password} = req.body;
            // bcrypt password
             password = await encryptPassword(password);
             req.body.password = password;
            const user = await User.create(req.body)
            res.status(201).json({success: true, data: user});
           
        } catch (error:any) {
           res.status(400).json({success:false,message: error.message})
        }
    }

    // login user
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            // check if user exists
            const user = await User.findOne({email}).select('+password');
            if(!user) {
                return res.status(400).json({success: false, message: 'Invalid credentials'});
            }
            // check if password is correct
            const isMatch = await comparePassword(password, user.password);
            if(!isMatch) {
                return res.status(400).json({success: false, message: 'Invalid credentials'});
            }
            // generate token
            const token =  generateToken(user._id);
           return res.status(200).json({success: true,token});
        } catch (error:any) {
            res.status(400).json({success:false ,message: error.message})
        }
    }


    // get user loginUser
    static async getUser(req: any, res: Response, next: NextFunction) {
        try {
            const userId=req.user;
            const user = await User.findOne({_id:userId});
            if(!user) {
                return res.status(400).json({success: false, message: 'User not found'});
            }
            res.status(200).json({success: true, data: user});
        } catch (error) {
            res.status(400).json({message: error})
        }
        
    }
}