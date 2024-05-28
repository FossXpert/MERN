import mongoose, { Document, Schema } from "mongoose";

export interface FaqItem extends Document {
    question: string;
    answer: string;
}
const faqSchema = new Schema<FaqItem>({
    question: { type: String },
    answer: { type: String },
})
export interface Category extends Document {
    title: string;
}
const categoriesSchema = new Schema<Category>({
    title: { type: String }
})
export interface BannerImage extends Document {
    public_id: string;
    url: string;
}

const bannerImageSchema = new Schema<BannerImage>({
    public_id: { type: String },
    url: { type: String }
})

interface Layout extends Document {
    type: string;
    faq: FaqItem[];
    categories: Category[];
    banner: {
        image: BannerImage;
        title: string;
        subtitle: string;
    };
}
const layOutSchema = new Schema<Layout>({
    type: {
        type: String
    },
    faq: [faqSchema],
    categories: [categoriesSchema],
    banner: {
        image: [bannerImageSchema],
        title: { type: String },
        subtitle: { type: String }
    },
});


const layoutModel = mongoose.model<Layout>('udemy-Layout', layOutSchema);
export default layoutModel;