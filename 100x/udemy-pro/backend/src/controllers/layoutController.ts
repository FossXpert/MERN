import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError";
import layoutModel, { Category, FaqItem } from "../models/layout";
import cloudinary from 'cloudinary'


//Cretae layouut


export const createLayout = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type } = req.body;
        if (type === 'Banner') {
            const { image, title, subtitle } = req.body;
            const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "layout"
            });
            const banner =  {
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                },
                title, subtitle
            }
            await layoutModel.create(banner);
        }
        if(type==='faq'){
            const {faq} = req.body;
            await layoutModel.create(faq);      
        }
        if(type==='categories'){
            const {categories} = req.body;
            await layoutModel.create(categories);      
        }
    } catch (error: any) {

    }
})