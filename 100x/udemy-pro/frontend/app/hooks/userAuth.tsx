import { useSelector } from "react-redux";


export default function userAuth() {

    const { user } = useSelector((state: any) => state.auth);
    console.log(user)
    if (user.role === 'admin') {
        return true;
    } else {
        return false
    }
}
