import mongoose, { Document, Schema } from "mongoose"


export interface iNotification extends Document{
    title : string;
    message : string;
    status : string;
    userId : string;
}

const notificationSchema = new Schema<iNotification>({
    title:{
        type : String,
        required : true
    },message:{
        type : String,
        required : true
    },
    status: {
        type : String,
        required : true,
        default:'unread',
    }
},{timestamps:true});

const notificationModel = mongoose.model('udemy-notification',notificationSchema);
export default notificationModel;