import {model, Schema} from "mongoose";


// 1. Create an interface representing a document in MongoDB.
interface ISchoolClass {
    name: string;
    strength: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
const schoolClass = new Schema<ISchoolClass>({
    name: { type: String, required: true },
    strength: { type: String, required: false }
});

export const SchoolClassModel = model<ISchoolClass>('Class', schoolClass);


