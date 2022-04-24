import {model, Schema} from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IStudent {
    name : String;
    age: Number;
    roll_num: Number;
    gender: String;
    class: any;
}


// 2. Create a Schema corresponding to the document interface.
const student = new Schema<IStudent>({
    name: { type: String, required: true },
    gender: { type: String, required: false },
    age: { type: Number, required: false },
    roll_num: { type: Number, required: false },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }
});

export const StudentModel = model<IStudent>('Student', student);


