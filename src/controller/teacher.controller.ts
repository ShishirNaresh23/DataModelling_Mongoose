import { TeacherModel } from '../model/teacher.mongo';
import * as express from 'express';

export class TeacherController{

    createTeacher = (req: express.Request, res: express.Response)=>{
        let teacherData = new TeacherModel(req.body);
        teacherData.save( (err)=>{
            console.error("Error while saving a teacher : ", err);
            res.send("Error occured while saving a teacher data.");
        })

        res.send("Teacher created successfully.");
    }


    deleteTeacher = (req: express.Request, res: express.Response)=>{
        const teacherName = req.body.name;
        TeacherModel.remove({
            name: teacherName
        },
        (err)=>{
            console.error("Error while deleting a teacher : ", err);
            res.send("Error occured while deleting a teacher data.");
        });

        res.send("Teacher deleted successfully.");
    }
}