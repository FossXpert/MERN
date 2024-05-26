import mongoose, { Model, Schema } from "mongoose";

export interface iOrder extends Document{
    courseId : string;
    userId : string;
    payment_info : object;
}
const orderSchema = new Schema<iOrder>({
   courseId : {
    type : String,required : true,
   },
   userId : {
    type : String,required : true,
   },
   payment_info : {
    type: Object,
   },
},{timestamps : true});

const orderModel : Model<iOrder> = mongoose.model('udemy-order',orderSchema);
export default orderModel; 