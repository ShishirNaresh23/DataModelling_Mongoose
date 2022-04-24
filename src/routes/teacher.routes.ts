import {Router} from 'express';
import {  TeacherController } from '../controller/teacher.controller';

export const teacherRouter = Router();
const teacherCtrl = new TeacherController();

teacherRouter.get("/");
teacherRouter.post("/", teacherCtrl.createTeacher);
teacherRouter.delete("/", teacherCtrl.deleteTeacher);


