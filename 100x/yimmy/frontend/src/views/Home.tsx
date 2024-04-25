import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../components/Login";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import { Button } from "@mui/material";
import axios from "axios";


export default function Home(){
    const {isAuthenticated,user,error,isLoading} = useAuth0();
    console.log("isAuthenticated",isAuthenticated)
    console.log(user)

    const callApi = async() =>{
        try {
            const url = "http://localhost:3001/unprotected";
            const response =  await axios.get(url)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="column">
            <h1>Auth0 Login</h1>
            <ul>
                <li><Button>Protected Route</Button></li>
                <li><Button>Unprotected Route</Button></li>
            </ul>
            {error && <p>Authentication Error Mate</p>}
            {!error && isLoading && <p> Loading...</p>}
            {!error && !isLoading && (
                <>
                    <LogIn/>
                    <Logout/>
                    <Profile/>
                </>
            )}
        </main>
    )
}