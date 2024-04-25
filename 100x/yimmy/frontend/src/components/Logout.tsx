import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";


export default function Logout() {

    const {isAuthenticated,logout} = useAuth0();

  return (
    <div>
        {isAuthenticated && 
        <div>
            <h1>Logout</h1>
            <Button onClick={()=>logout()}>Logout</Button>
        </div>
        }
    </div>
  )
}
