import mongoose,{Document,Schema} from 'mongoose'
import {v4 as uuid4} from 'uuid'

interface Course extends Document{
  _id: string;
  title:string;
  description:string;
  price:number;
  category:string;
  admin_id : string;
}

const courseSchema : Schema<Course> = new Schema<Course>({
    _id : {type : String , default : uuid4()},
    title:{ type : String , required : true },
    description:{ type : String ,required: true } ,
    price:{ type:Number , required:true },
    category:{
      type:String ,
      enum:['Design','Code','Marketing']
    },
    admin_id: { type:String, required:true, ref:'courseAdmin'}
});

export default mongoose.model<Course>('courses',courseSchema);