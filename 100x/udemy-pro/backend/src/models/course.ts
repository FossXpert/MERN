import mongoose,{Document,Schema,Model, ObjectId} from "mongoose";
import { iUser } from "./user";


export interface iComment extends Document {
    user: iUser;
    question: string;
    questionReplies?: iComment[]; // Learn Optional Chaining
}
export interface iReview extends Document {
    user: iUser;
    rating: number;
    comment: string;
    commentReplies?: iComment[];
}
interface iLink extends Document {
    title: string;
    url: string;
}
interface iCourseData extends Document {
    title: string;
    description: string;
    videoUrl: string;
    videoSection: string;
    videoLength: number;
    videoPlayer: string;
    link: iLink[];
    suggestion: string;
    questions: iComment[];
}

export interface iCourse extends Document {
    name: string;
    description?: string;
    price: number;
    estimatedPrice?: number;
    thumbnail: object;
    tags: string;
    level: string;
    demoUrl: string;
    benefits: { title: string }[];
    preRequisites: { title: string }[];
    reviews: iReview[];
    courseData: iCourseData[];
    ratings?: number;
    purchased?: number;
}

const reviewSchema = new Schema<iReview>({
    user: Object,
    rating: {
        type: Number,
        default: 0
    },
    comment: String,
});
const linkSchema = new Schema<iLink>({
    title: String,
    url: String,
});
const commentSchema = new Schema<iComment>({
    user: Object,
    question: String,
    questionReplies: [Object],
});
const courseDataSchema = new Schema<iCourseData>({
    videoUrl: String,
    title: String,
    videoSection: String,
    description: String,
    videoLength: Number,
    videoPlayer: String,
    link: [linkSchema],
    suggestion: String,
    questions: [commentSchema],

});
const courseSchema = new Schema<iCourse>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    estimatedPrice: {
        type: Number,
    },
    thumbnail: {
        public_id: {
            type: String
        },
        url: {
            type: String
        }
    },
    tags: {
        type: String, required: false
    },
    level: {
        type: String, required: true
    },
    demoUrl: {
        type: String,
        required: true,
    },
    benefits: [{ title: String }],
    preRequisites: [{ title: String }],
    reviews: [reviewSchema],
    courseData:[courseDataSchema],
    ratings:{
        type:Number,
        default:0,
    },
    purchased:{
        type:Number,
        default:0,
    }

});

const courseModel :Model<iCourse> = mongoose.model('udemy-course',courseSchema);
export default courseModel;
