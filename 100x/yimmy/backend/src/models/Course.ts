import mongoose,{Document,Schema} from 'mongoose'
import {v4 as uuid4} from 'uuid'

interface Course extends Document{
  id: string;
  title:string;
  description:string;
  price:number;
  category:string;
  admin_id : string;
}

const courseSchema : Schema<Course> = new Schema<Course>({
    id:{type: String, default:  () => uuid4(),required:true,unique:true},
    title:{ type : String , required : true },
    description:{ type : String ,required: true },
    price:{ type:Number , required:true },
    category:{
      type:String ,
      enum:['Design','Code','Marketing']
    },
    admin_id: { type:String, required:true, ref:'Admin'}
});

const CourseModel =  mongoose.model<Course>('Courses',courseSchema);
export default CourseModel;