import express from 'express';
import {classRouter} from './routes/class.routes';
import {studentRouter} from './routes/student.routes';
import {teacherRouter} from './routes/teacher.routes';
import {conn} from './database';



const app = express()
const PORT = 3000 || process.env.PORT;
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
  });

app.use('/api/v1/class',classRouter);
app.use('/api/v1/student',studentRouter);
app.use('/api/v1/teacher',teacherRouter);


async function start(){

    await conn;    
    
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

