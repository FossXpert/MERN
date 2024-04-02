import { atom } from "recoil"
const varEmail = atom({
    key : 'email',
    default : ""
})

const varPassword = atom({
    key: 'password',
    default : ""
})

const tokenExist = atom({
    key: 'tokenExist',
    default: false
})

export {varEmail, varPassword,tokenExist} 