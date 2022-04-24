import { StudentModel } from '../model/student.mongo';
import * as express from 'express';

export class StudentController{

    getStudents = async (req: express.Request, res: express.Response)=>{
        var studentName = req.params.name;
        
        if(studentName){
            var studentData = await StudentModel.find({ name: studentName }).exec();
        }
        else{
            var studentData = await StudentModel.find({}).exec();
        }
        
        if(studentData.length === 0) return res.send(`No records found for the student with name : ${studentName}`);
        
        return res.send(studentData);
    }


    createStudent = async (req: express.Request, res: express.Response)=>{
        try{
            var studentData = new StudentModel(req.body);
            
            if(req.body){
                let fetchStudentData = await StudentModel.find({ name: studentData.name }).exec();
                if(fetchStudentData.length != 0){
                    res.send(`Error! Cannot create student with name ${studentData.name}.`);
                    return;
                }
            }

            await studentData.save( (err : any)=>{
                if(err){
                    console.error("Error while saving a student : ", err);
                    res.send("Error occured while saving a student data.");
                }
            });

        } 
        catch(err: any){
            console.log("Error! occured while creating student!");
            
            if (err.name == 'ValidationError') {
                console.error('Error Validating!', err);
                res.status(422).json(err);
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        }    

        res.send("Student created successfully.");
    }


    deleteStudent = (req: express.Request, res: express.Response)=>{
        // let studentData = new StudentModel(req.body);

        // if(studentData){
        //     let fetchStudentData = await StudentModel.find({ name: studentData.name }).exec();
        //     if(fetchStudentData.length != 0){
        //         res.send(`Error! Cannot create student with name ${studentData.name}.`);
        //         return;
        //     }
        // }
        // else{
        //     res.send("Error! student data cannot be empty.");
        // }

        // await studentData.save( (err : any)=>{
        //     if(err){
        //         console.error("Error while saving a student : ", err);
        //         res.send("Error occured while saving a student data.");
        //     }
        // });

        res.send("Student created successfully.");
    }
}