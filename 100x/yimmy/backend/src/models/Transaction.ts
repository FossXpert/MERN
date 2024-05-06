import mongoose,{Document,Schema} from "mongoose";
import {v4 as uuid4} from 'uuid'

interface Transaction extends Document{
    id:string;
    user_id:string;
    course_id:string;
    transactionDate :Date;
    amountPaid :number;
    paymentMethod : string;
}

const transactionSchema : Schema<Transaction> = new Schema<Transaction>({
    id:{type: String, default:() => uuid4(),required:true,unique:true}, // Don't use default : uuid4 because it assign samw uuid to all documents
    user_id : {type:String, ref:'User', required:true},
    course_id: {type:String, ref:'Courses',required:true},
    transactionDate:{type:Date,default:Date.now()},
    amountPaid:{type:Number,required:true},
    paymentMethod:{type: String , enum: ['Credit Card','Debit Card','Net Banking','UPI','Wallet']}
})

const TransactionModel =  mongoose.model<Transaction>("Transactions",transactionSchema);
export default TransactionModel;