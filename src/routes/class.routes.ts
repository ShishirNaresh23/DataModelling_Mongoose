import {Router} from 'express';
import { ClassController } from '../controller/class.controller';

export const classRouter = Router();
const classCtrl = new ClassController();

classRouter.get("/");
classRouter.post("/", classCtrl.createClass);

