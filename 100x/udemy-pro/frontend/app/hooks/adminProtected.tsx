import { redirect } from "next/navigation";
import userAuth from "./userAuth";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface ProtectedProps {
    children: ReactNode
}
export default function AdminProtected({ children }: ProtectedProps) {

    const {user} = useSelector((state:any) => state.auth)
    
    const isAuthenticated = user && user.role === 'admin' 

    return isAuthenticated ? children : redirect("/")
}