import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
export default function Home(){
    const {loginWithRedirect,isAuthenticated,user,logout} = useAuth0();

    console.log("isAuthenticated",isAuthenticated)
    console.log(user)
    return (
        <div>
            <h1>Home</h1>
        <div className="column">
            {isAuthenticated===false?
            (<p><Button onClick={()=>loginWithRedirect()}>SignIn</Button></p>):
            (<p><Button onClick={()=>logout()}>SignOut</Button></p>)
            }
        </div>
        </div>
    )
}