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
exports.createCourse = exports.getAllAdminCourses = exports.getAllCourse = exports.isCourseExist = void 0;
const Course_1 = __importDefault(require("../models/Course"));
const common_1 = require("@rahulray8518/common");
const isCourseExist = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseDetail = yield Course_1.default.findOne({ courseId });
        return courseDetail;
    }
    catch (error) {
        console.log(error);
        throw (error);
    }
});
exports.isCourseExist = isCourseExist;
const getAllCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield Course_1.default.find({});
        res.status(200).json({
            message: "Course fetched Succesfully",
            courses: courses
        });
    }
    catch (error) {
        console.log("Error in fetching Courses");
        throw error;
    }
});
exports.getAllCourse = getAllCourse;
const getAllAdminCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminId = req.headers.adminid;
        console.log(adminId);
        console.log(req.headers);
        if (adminId === undefined || adminId === null) {
            return res.status(500).json({
                message: "Admin id is undefined or null",
            });
        }
        const courses = yield Course_1.default.find({ admin_id: adminId });
        res.status(200).json({
            id: adminId,
            courses: courses,
            message: "Admin Courses is fetched Succesfully",
        });
    }
    catch (error) {
        console.log("Error in fetching Courses");
        throw error;
    }
});
exports.getAllAdminCourses = getAllAdminCourses;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        const parseInput = common_1.courseInput.safeParse(req.body);
        if (!parseInput.success) {
            return res.status(500).json({
                message: "zod input validation failed",
                error: parseInput.error
            });
        }
        const title = (_a = parseInput.data) === null || _a === void 0 ? void 0 : _a.title;
        const description = (_b = parseInput.data) === null || _b === void 0 ? void 0 : _b.description;
        const price = (_c = parseInput.data) === null || _c === void 0 ? void 0 : _c.price;
        const imageLink = (_d = parseInput.data) === null || _d === void 0 ? void 0 : _d.imageLink;
        const admin_id = (_e = parseInput.data) === null || _e === void 0 ? void 0 : _e.admin_id;
        const courseId = (_f = parseInput.data) === null || _f === void 0 ? void 0 : _f.courseId;
        const category = parseInput.data.category;
        if (yield (0, exports.isCourseExist)(courseId)) {
            return res.status(409).json('Course already exist');
        }
        const newCourse = new Course_1.default({
            title, description, price, imageLink, admin_id, courseId, category
        });
        yield newCourse.save();
        return res.status(200).json({
            Message: "Saved Succesfully",
            InputBody: newCourse,
        });
    }
    catch (error) {
        console.log("error in createCourse Route", error.message);
        throw error;
    }
});
exports.createCourse = createCourse;
