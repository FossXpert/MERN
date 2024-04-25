import { useAuth0 } from "@auth0/auth0-react"
import { List } from "@mui/material";


export default function Profile() {

    const {user,isAuthenticated} = useAuth0();
  return (
    <div>
        {isAuthenticated && (
        <List>{user?.name} {user?.email} {<img src={user?.picture}/>}</List>)}
    </div>
    
  )
}
