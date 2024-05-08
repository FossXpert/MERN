import { zodCourseDetail } from '@rahulray8518/common';
import mongoose,{Schema} from 'mongoose'


const courseSchema : Schema<zodCourseDetail> = new Schema<zodCourseDetail>({
    courseId:{type: String,required:true,unique:true},
    title:{ type : String , required : true },
    description:{ type : String ,required: true },
    price:{ type:Number , required:true },
    imageLink : {type : String, required : true},
    category:{
      type:String ,
      enum:['Design','Code','Marketing']
    },
    admin_id: { type:String, required:true, ref:'Admin'}
});

const CourseModel =  mongoose.model<zodCourseDetail>('Courses',courseSchema);
export default CourseModel;