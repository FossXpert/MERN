import express from 'express'
import { isAuthenticated, validateUserRole } from '../middlewares/auth';
import { createCategory, createLayout, editLayout, getLayoutByType } from '../controllers/layoutController';
import { updateAccessToken } from '../controllers/userController';

const layoutRouter = express.Router();
layoutRouter.post('/createlayout',updateAccessToken,isAuthenticated,validateUserRole('admin'),createLayout);
layoutRouter.post('/createcategory',updateAccessToken,isAuthenticated,validateUserRole('admin'),createCategory);
layoutRouter.post('/editlayout',updateAccessToken,isAuthenticated,validateUserRole('admin'),editLayout);
layoutRouter.get('/getlayoutbytype/:type',updateAccessToken,isAuthenticated,validateUserRole('admin'),getLayoutByType);
export default layoutRouter;
