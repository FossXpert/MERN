import express, { Router ,Request,Response} from 'express';
import { generateJWT, authenticateJWT } from '';
import cors from 'cors';


const router: Router = express.Router();
router.use(cors());