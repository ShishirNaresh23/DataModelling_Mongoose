import { SchoolClassModel } from '../model/schoolClass.mongo';
import * as express from 'express';

export class ClassController{

    createClass = (req: express.Request, res: express.Response)=>{
        let classData = new SchoolClassModel(req.body);
        classData.save( (err)=>{
            console.error("Error while saving a class : ", err);
            res.send("Error occured while saving a class data.");
        })

        res.send("Class created successfully.");
    }


    updateClass = (req: express.Request, res: express.Response)=>{
        // const classData = req.body;
        // SchoolClassModel.updateOne({
        //     name: teacherName
        // },
        // (err)=>{
        //     console.error("Error while deleting a teacher : ", err);
        //     res.send("Error occured while deleting a teacher data.");
        // });

        // res.send("Teacher deleted successfully.");
    }
}