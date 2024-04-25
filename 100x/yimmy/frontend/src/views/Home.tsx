import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../components/Login";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import { List } from "@mui/material";

export default function Home(){
    const {isAuthenticated,user} = useAuth0();
    console.log("isAuthenticated",isAuthenticated)
    console.log(user)
    return (
        <div>
            <h1>Home</h1>
        <div className="column">
            {isAuthenticated===false?
            (<LogIn/>):
            (<Logout/>)
            }
        </div>
        {isAuthenticated && 
            <div className="column">
                <List>Welcome {<Profile/>}</List>
            </div>
        }
        </div>
    )
}