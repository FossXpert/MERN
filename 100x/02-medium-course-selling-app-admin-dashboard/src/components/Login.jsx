import { useNavigate } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";
import { useRecoilState,useSetRecoilState } from "recoil";
import {varPassword, varEmail, tokenExist} from '../atoms/Atom';


/// File is incomplete. You need to add input boxes to take input for users to login.
function Login(){

    const [email,setEmail] = useRecoilState(varEmail);
    const [password,setPassword] = useRecoilState(varPassword);
    const setTokenExist = useSetRecoilState(tokenExist) // token existence state used in
    const navigate = useNavigate();
    const handleLogin = async() => {
        loginUser()
        console.log(`${email},${password}`); 
    }
    const loginUser = async() => {
        try{
            const response = await fetch("http://100.93.3.137:3001/admin/login",{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json', //headers is super Important 
                },
                body : JSON.stringify({
                    email,password
                })
            })
            const data  = await response.json()
            console.log(data)         
            if(response.status===200){
                localStorage.setItem('token',data.token)
                console.log('Successfully Logged In')
                setTokenExist(true)
                setTimeout(() => navigate("/dashboard"), 5000);
            }else{
                 alert("Invalid Username or Password");
            }
        }catch(error){
            console.log(error.message)
        }
    }

    return <div>
        <br/>
        <center>
        <Card variant={"outlined"} style={{'padding':'5%','marginTop':'6%','width':'40%','marginLeft':''}} >
        <h4>Login to admin dashboard</h4>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={e=> setEmail(e.target.value)} /><br/><br/>    
        <TextField type='password' label="Password" variant='outlined' onChange={(e)=>{setPassword(e.target.value)}} /><br/><br/>
        <Button onClick={handleLogin}>Login</Button>
        <br/>
        New here? <Button><a href="/register">Register</a></Button>
        </Card>
        </center>
    </div>
}

export default Login; 
