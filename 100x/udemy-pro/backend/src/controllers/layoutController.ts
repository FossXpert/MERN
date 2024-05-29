import { Request, Response, NextFunction } from "express";
import { catchAsyncError, success } from "../middlewares/catchAsyncError";
import layoutModel, { FaqItem, Layout } from "../models/layout";
import cloudinary from 'cloudinary'
import ErrorHandler from "../utills/errorHandlers";
import categoryModel, { iCategory } from "../models/category";


//Cretae layouut


export const createLayout = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type } = req.body;
        console.log(type);
        if (type === 'banner') {
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
            await layoutModel.create({type:'banner',banner:banner});
            return res.status(201).json({
                success : true,
                message : "Banner Created Successfully"
            })
        }
        if(type==='faq'){
            const {faq} = req.body;  
            const faqItems = await Promise.all(
                faq.map(async(items:FaqItem)=>{
                    return{
                        question : items.question,
                        answer : items.answer
                    }
                })
            )
            await layoutModel.create({type : 'faq', faq : faqItems });
            return res.status(201).json({
                success : true,
                message : "FAQ Created Successfully"
            })
        }
    } catch (error: any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const editLayout = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const { type } = req.body;
        console.log(type);
        if (type === 'banner') {
            const bannerData = await layoutModel.findOne({type:'banner'});
            if(bannerData){
                await cloudinary.v2.uploader.destroy(bannerData.banner.image.public_id)
                console.log(bannerData.banner.image.public_id);
            }else{
                return next(new ErrorHandler('banner database is empty',400));
            }
            const { image, title, subtitle } = req.body;
            const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "layout"
            });
            const banner = {
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                },
                title, subtitle
            }
            console.log("bannerData",bannerData)
            await layoutModel.findByIdAndUpdate(bannerData?._id, {banner});
            return res.status(201).json({
                success : true,
                message : "Banner updated Successfully"
            })
        }
        if(type==='faq'){
            const {faq} = req.body;
            const faqData = await layoutModel.findOne({type:'faq'});
            if(!faqData){
                return next(new ErrorHandler('faq database is empty',400));
            }
            await layoutModel.findByIdAndUpdate(faqData._id,{type:'faq',faq:faq})
            return res.status(201).json({
                success : true,
                message : "faq updated Successfully"
            })
        }
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})
export const createCategory = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const categoryName : iCategory = req.body;
        const category = await categoryModel.create(categoryName);
        if(!category){
            return next(new ErrorHandler('Falied to create category',400));
        }
        return res.status(201).json({
            success:true,
            category
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})