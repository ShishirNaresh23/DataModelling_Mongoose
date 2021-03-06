import {Router} from 'express';
import { StudentController } from '../controller/student.controller';

export const studentRouter = Router();
const studentCtrl = new StudentController();

studentRouter.get("/:name?", studentCtrl.getStudents);
studentRouter.post("/", studentCtrl.createStudent);
studentRouter.delete("/", studentCtrl.deleteStudent);
