import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";


export default function LogIn() {

    const {isAuthenticated,loginWithRedirect} = useAuth0();

  return (
    <div>
        {isAuthenticated && 
        <div>
            <h1>Login</h1>
            <Button onClick={()=>loginWithRedirect()}></Button>
        </div>
        }
    </div>
  )
}
