import { signinUser } from "@rahulray8518/common";
import {jwtDecode } from "jwt-decode";
import { atom } from "recoil";

export const atomEmail = atom({
    key : 'email',
    default : ""
});
export const atomUserName = atom({
    key : 'username',
    default : ""
})
export const atomRememberMe = atom({
    key : 'remeberme',
    default : false
})
export const atomRole = atom({
    key : 'role',
    default : 'user'
})
export const atomFullName = atom({
    default: '',
    key: 'fullname'
})
//---//
export const atomCourseTitle = atom({
    default:'',
    key:'title'
})
export const atomCourseDescription = atom({
    default:'',
    key: 'description'
})
export const atomCoursePrice = atom({
    default: '',
    key:'price'
})
export const atomCategory = atom({
    default:'code',
    key:'category'
})
export const atomAdminId = atom({
    default:'',
    key:'adminId'
})
//---//
export function decodePayload(token : string | null){
    if(token===null){
        console.log("Token is Null")
        return;
    }
    const decodePayload : decodePayloadInterface = jwtDecode(token); // https://sprl.in/lmUrltJ
    if(decodePayload ===null){
        console.log("Token Extraction Failed")
        return;
    }
    return decodePayload;
}

export const getToken = (): string | null =>  {
    if(localStorage.getItem('token')!==null){
        return localStorage.getItem('token');
    }else{
        console.log("token extraction issue")
        return null;
    }
}

export const login = (token : string) =>{
    localStorage.setItem('token',token);
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const isLoggedIn = (): boolean => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp !== undefined ){
                const expTime = decodedToken.exp * 1000;
                const currentTime = Date.now();
                return currentTime < expTime;
            }else{
                console.log("DecodedTOken.exp is undefined")
                return false;
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            return false;
        }
    } else {
        return false; 
    }
}

export interface decodePayloadInterface {
    id : string,
    username:string,
    role:string,
    email?: string
}