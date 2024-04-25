import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";


export default function LogIn() {

    const {isAuthenticated,loginWithPopup} = useAuth0();

  return (
    <div>
        {isAuthenticated==false && 
        <div>
            <h1>Login</h1>
            <Button onClick={()=>loginWithPopup()}>Login</Button>
        </div>
        }
    </div>
  )
}
