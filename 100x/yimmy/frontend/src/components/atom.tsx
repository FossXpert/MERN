import { JwtPayload } from "jsonwebtoken";
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

export function decodePayload(token : string){


    const decodePayload : JwtPayload = jwtDecode(token);
    if(decodePayload)
}