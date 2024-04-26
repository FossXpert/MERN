import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "../components/Login";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import { Button } from "@mui/material";
import axios from "axios";


export default function Home(){
    const {isAuthenticated,user,error,isLoading,getAccessTokenSilently} = useAuth0();
    console.log("isAuthenticated",isAuthenticated)
    console.log(user)
    const callProtectedApi = async () => {
        try {
          const url = "http://localhost:3001/user/protected";
          const token = await getAccessTokenSilently();
          console.log("Token : ", token);
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status >= 200 && response.status < 300) {
            console.log('Request successful : ', response.data);
          } else {
            console.log('Request failed : ', response.statusText);
          }
        } catch (error:unknown){
            console.error('Error in protected route:', error);
        // Check if error has a message property before accessing it
        const errorMessage = (error as Error).message || 'Unknown error';
        console.log(errorMessage)
        }
      }

    return (
        <main className="column">
            <h1>Auth0 Login</h1>
            <ul>
                <li><Button onClick={()=>callProtectedApi()}>Protected Route</Button></li>
                <li><Button onClick={()=>callProtectedApi()}>Protected Route</Button></li>
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