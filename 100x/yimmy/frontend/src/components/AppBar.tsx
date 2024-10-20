import { Button, Toolbar, Typography,Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { decodePayload, decodePayloadInterface, getToken, isLoggedIn, logout } from './atom';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveAppBar(){
    const payload : decodePayloadInterface | undefined |null = decodePayload(getToken());
    const navigate = useNavigate();
    const handleLogout = () => {
         logout();
         navigate('/');
    }
    const handleInstructor = () => {
        navigate('/instructor')
    }
    // Attempt to decode the token, handle errors gracefully
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* why component ="div" https://sprl.in/s3UmCMi */}
                <Typography variant='h6' component="div" sx={{marginTop:'10px'}}>
                    Udemy
                </Typography>
                <Typography sx={{textAlign:'left', marginTop:'10px'}} >
                   {!isLoggedIn() && (<Button color="inherit" onClick={()=>(navigate('/signin'))}>SignIn</Button>)}
                   {!isLoggedIn() && (<Button color="inherit" onClick={()=>(navigate('/signup'))}>Signup</Button>)}
                   {isLoggedIn() && (<Button color='inherit' onClick={handleInstructor}>Instructor</Button>)}
                   {isLoggedIn() && payload &&(<Button color="inherit">{payload.email}</Button>)}
                   {isLoggedIn() && (<Button color="inherit" onClick={handleLogout}>Logout</Button>)}      
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export function AppBar2(){
    const navigate = useNavigate();
    const handleInstructor = () => {
        navigate('/dashboard')
    }
    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return(
        <AppBar position='fixed' color='secondary'>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant='h6' component="div" sx={{marginTop:'10px'}}>
                   Udemy Instructor Dashboard
                </Typography>
                <Typography sx={{ textAlign: 'left', marginTop:'10px' }}>
                    {isLoggedIn() && (<Button color='inherit' onClick={handleInstructor}> Student </Button>)}
                    {isLoggedIn() && (<Button color='inherit' onClick={handleLogout}> Logout </Button>)}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
// https://www.useblackbox.io/editor?id=97761b93-654d-4711-9a92-5a09025108c2
  