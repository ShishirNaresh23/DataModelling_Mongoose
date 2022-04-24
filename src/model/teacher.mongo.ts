import {model, Schema} from "mongoose";


interface ITeacher {
    teacherId: Number;
    name : String;
    age: Number;
    gender: String;
    contact_num: String;
    married: Boolean;
    classes : any;
}

const teacher =  new Schema<ITeacher>({
    teacherId: {type: Number, required: true, default: 0},
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    contact_num: { type: Number, required: true },
    married: { type: Boolean, required: false },
    classes: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }
});

export const TeacherModel = model<ITeacher>('Teacher', teacher);


