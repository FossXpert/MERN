import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../components/Login";
import Logout from "../components/Logout";
import Profile from "../components/Profile";


export default function Home(){
    const {isAuthenticated,user,error,isLoading} = useAuth0();
    console.log("isAuthenticated",isAuthenticated)
    console.log(user)
    return (
        <main className="column">
            <h1>Auth0 Login</h1>
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