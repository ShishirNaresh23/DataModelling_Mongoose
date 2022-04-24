import express from 'express';
const mongoose = require("mongoose");
import * as dotenv from "dotenv";
import * as path from 'path';
import {classRouter} from './routes/class.routes';
import {studentRouter} from './routes/student.routes';
import {teacherRouter} from './routes/teacher.routes';

// import {SchoolClassModel} from './model/schoolClass.mongo';
// import {StudentModel} from './model/student.mongo';


let envPath = path.join(path.join(__dirname,'../'),'/.env');

dotenv.config({ path: envPath });

const app = express()
const PORT = 3000 || process.env.PORT;
const USERNAME = "" || process.env.USERNAME;
const PASSKEY = "" || process.env.PASSKEY;

const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSKEY}@cluster0.z3h3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(MONGO_URL);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
  });

app.use('/api/v1/class',classRouter);
app.use('/api/v1/student',studentRouter);
app.use('/api/v1/teacher',teacherRouter);


async function start(){
    await mongoose.connect(
        MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(
            () => console.log(" Mongoose is connected")
        ).catch(
            (err: any) => console.log(err)
        );
        

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })

    // var studentData = new StudentModel({
    //     name : "Shishir",
    //     age: 23,
    //     roll_num: 25,
    //     gender: 'Male'
    // });

    // studentData.save((err) =>{
    //     if (err) console.log(err);
    //     // saved!
    //   });

    // var classData = new SchoolClassModel({
    //     name : "VI",
    //     strength: 29
    // });

    // classData.save((err)=>{
    //     if (err) console.log(err);
    // })
}

start();

