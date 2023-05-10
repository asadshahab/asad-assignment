// import the user model
import Task from '../models/Task';
import { Request, Response, NextFunction } from 'express';


export default class TaskController {

    // create task
    static async createTask(req: Request, res: Response, next: NextFunction) {
        try {

            const taskData = await await Task.create(req.body)
            res.status(201).json({success: true, data: taskData});
           
        } catch (error) {
           res.status(400).json({message: error})
        }
    }

    // Get Tasks
    static async getTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const taskData = await Task.find()
            if(taskData.length === 0) {
                return res.status(400).json({success: false, message: 'No tasks found'});
            }
            res.status(200).json({success: true, data: taskData});
        } catch (error) {
            res.status(400).json({message: error})
        }
    }
}