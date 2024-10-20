"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController"); // Import the userSignup function
const router = express_1.default.Router();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the userSignup function
        yield (0, userController_1.userSignup)(req, 'user', res);
    }
    catch (error) {
        console.error('Error in user signup:', error);
        res.status(500).json({ message: 'Internal server error',
            error: error
        });
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = req.query.role;
        // Call the userSignup function
        yield (0, userController_1.userLogin)(req, role, res);
    }
    catch (error) {
        console.error('Error in user Login:', error);
        res.status(500).json({ message: 'Internal server error',
            error: error
        });
    }
}));
//Below one used in Auth0
// router.get('/getUserData',async(req:Request,res:Response)=>{
//     try{
//         const authToken = req.headers.authorization?.split(' ')[1];
//         const response = await axios.get('https://dev-cd616eaxtu7so5dm.us.auth0.com/userinfo',{
//             headers:{
//                 Authorization: `Bearer ${authToken}`
//             }
//         })
//         if(response.status >=200 && response.status <300){
//             const data = await response.data;
//             console.log(data);
//             res.status(response.status).json({
//                 message:'Success',
//                 data:data
//             })
//         }else{
//             console.log('Request failed : ', response.statusText);
//             res.status(response.status).json({
//                 message:'Request failed',
//                 data:response.statusText
//             })
//         }
//     }catch(error){
//         console.error('Error in protected route:', error);
//         throw error
//     }
// })
exports.default = router;
