import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { signinUser } from '@rahulray8518/common';
import { decodePayload, getToken, isLoggedIn } from './atom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ResponsiveAppBar(){
    const payload : signinUser | undefined = decodePayload(getToken());
    // Attempt to decode the token, handle errors gracefully
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* why component ="div" https://sprl.in/s3UmCMi */}
                <Typography variant='h6' component="div" sx={{textAlign:'left', marginTop:'10px'}}>
                    Udemy
                </Typography>
                <Typography sx={{textAlign:'left', marginTop:'10px'}} >
                   {isLoggedIn() && (<Button color="inherit">Login</Button>)}
                   {!isLoggedIn() && (<Button color="inherit">Signup</Button>)}
                   {isLoggedIn() && payload &&(<Button color="inherit">{payload.username}</Button>)}
                   {isLoggedIn() && (<Button color="inherit">Logout</Button>)}                 
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

// https://www.useblackbox.io/editor?id=97761b93-654d-4711-9a92-5a09025108c2
  