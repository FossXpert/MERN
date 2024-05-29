import mongoose, {Schema, Types} from 'mongoose'


export interface iCategory extends Document {
    categoryName: string;
    containedCourses?: Types.ObjectId[];
}
const categoriesSchema = new Schema<iCategory>({
    categoryName: { type: String },
    containedCourses : [{ type: Schema.Types.ObjectId}]
})

const categoryModel = mongoose.model<iCategory>('udemy-category',categoriesSchema);
export default categoryModel;