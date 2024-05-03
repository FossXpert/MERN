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