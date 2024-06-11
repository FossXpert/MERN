import { redirect } from "next/navigation";
import userAuth from "./userAuth";
import { ReactNode } from "react";

interface ProtectedProps {
    children: ReactNode
}
export default function Protected({ children }: ProtectedProps) {

    const isAuthenticated = userAuth();
    console.log("isAuthenticated : ",isAuthenticated)

    return isAuthenticated ? children : redirect("/")
}