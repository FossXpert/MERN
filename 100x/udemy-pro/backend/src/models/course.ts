import mongoose,{Document,Schema,Model} from "mongoose";

interface iComment extends Document {
    user: object;
    comment: string;
    commentReplies?: iComment[]; // Learn Optional Chaining
}
interface iReview extends Document {
    user: object;
    rating: number;
    comment: string;
    commentReplies: iComment[];
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
    comment: String,
    commentReplies: [Object],
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
