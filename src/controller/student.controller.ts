import { StudentModel } from '../model/student.mongo';
import * as express from 'express';

export class StudentController{

    getStudents = (req: express.Request, res: express.Response)=>{
        
    }


    createStudent = (req: express.Request, res: express.Response)=>{
        console.log(req)
        let studentData = new StudentModel(req.body);
        studentData.save( (err)=>{
            console.error("Error while saving a student : ", err);
            res.send("Error occured while saving a student data.");
        })

        res.send("Student created successfully.");
    }


    deleteStudent = (req: express.Request, res: express.Response)=>{
        const studentName = req.body.name;
        StudentModel.remove({
            name: studentName
        },
        (err)=>{
            console.error("Error while deleting a student : ", err);
            res.send("Error occured while deleting a student data.");
        });

        res.send("Student deleted successfully.");
    }
}