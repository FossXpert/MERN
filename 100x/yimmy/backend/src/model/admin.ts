import mongoose,{Document,Schema} from "mongoose";

interface IAdmin extends Document {
    isAdmin : boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    userName?: string,
    password : string
}

//Define mongoose Schema

const AdminSchema = new Schema({
    isAdmin: {type: Boolean, required: true},
    firstName: String,
    lastName: String,
    email:{ type:String , unique:true ,required: [true,"Why no `email`?"] },
    userName: { type: String ,unique:true  } ,
    password: { type: String , required: [true,"Why no `password`?"]}
});