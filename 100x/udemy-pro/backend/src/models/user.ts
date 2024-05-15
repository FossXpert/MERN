import mongoose, { Document,Schema,Model} from "mongoose";
import bcrypt from 'bcryptjs';


const emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export interface iUser extends Document {
    name : string;
    email : string;
    password : string;
    avatar : {
        public_id : string;
        url : string;
    };
    role: string;
    isVerified: boolean;
    courses: Array<{courseId: string}>;
    comparePassword: (password: string) => Promise<boolean>;
    createdAt: Date;
}

const userSchema = new Schema<iUser>({
    name : {
        type : String,
        required : [true, 'Please enter your name'],
    },
    email : {
        type : String,
        required : [true, 'Please enter your email'],
        unique : true,
        validate:{
            validator:function(value:string){
                return emailRegexPattern.test(value);
            }
        },
        message : 'Please enter a valid email'
    },
    password : {
        type : String,
        required : [true, 'Please enter your password'],
        minlength : [6, 'Your password must be at least 6 characters long'],
        select : false,
    },
    avatar:{
        public_id:{
            type : String,
            required : true,
        },
        url:{
            type : String,
            required : true,
        }
    },
    role:{
        type : String,
        default : 'user',
    },
    isVerified:{
        type : Boolean,
        default : false,
    },
    courses:[
        {
            courseId : String,
        }
    ],

},{timestamps : true});


//Bcrypting Password - Remember
userSchema.pre<iUser>('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function(enteredPassword:string){
    return await bcrypt.compare(enteredPassword, this.password);
};

const userModel : Model<iUser> = mongoose.model('User', userSchema);
export default userModel;