import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function AppBar({renderComponent}){
    return (<div style={{
        display : 'flex',
        justifyContent : 'space-between'
    }}>
        {renderComponent === 'title' && <Title/>}  
    <div style={{display:'flex'}}>
        {renderComponent === 'signup' && <Signup/>}
        {renderComponent === 'login' && <Login/>}
        {renderComponent === 'logout' && <Logout/>}     
    </div>
    </div>)
}
export function Signup(){
    const navigate = useNavigate();
    const handleSignup = () =>{
        navigate('/signup')
    }
    return <div>
        <Button onClick={handleSignup}>Signup</Button>
    </div>
}
export function Login(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    return <div>
        <Button onClick={handleLogin}>Login</Button>
    </div>
}
export function Title(){
    return <div>
    <Typography variant="h6">
        Coursera
    </Typography>
    </div>
}

export function Logout(){
    const navigate = useNavigate();
    const logout = async () => {
        let token = await localStorage.getItem('token');
        console.log("Logging out "+token);
        localStorage.clear();
        navigate('/login')
    }
    return <div>
        <Button variant="contained" onClick={logout}>Log Out</Button>
    </div>
}

export default AppBar
