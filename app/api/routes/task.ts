import TaskController from "../controllers/task";
import { Router } from "express";
import { Auth } from "../middlewares/auth";

// validation handler
import validatorHandler from '../middlewares/validatorHandler';
import createTaskSchema from '../utils/taskValidation';
const taskRouter = Router();

taskRouter.post('/create-task',Auth, validatorHandler(createTaskSchema), TaskController.createTask);
taskRouter.post('/list-tasks',Auth, TaskController.getTasks)

export default taskRouter;

