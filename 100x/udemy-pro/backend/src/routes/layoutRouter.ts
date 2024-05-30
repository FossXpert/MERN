import express from 'express'
import { isAuthenticated, validateUserRole } from '../middlewares/auth';
import { createCategory, createLayout, editLayout, getLayoutByType } from '../controllers/layoutController';

const layoutRouter = express.Router();
layoutRouter.post('/createlayout',isAuthenticated,validateUserRole('admin'),createLayout);
layoutRouter.post('/createcategory',isAuthenticated,validateUserRole('admin'),createCategory);
layoutRouter.post('/editlayout',isAuthenticated,validateUserRole('admin'),editLayout);
layoutRouter.post('/getlayoutbytype',isAuthenticated,validateUserRole('admin'),getLayoutByType);
export default layoutRouter;
