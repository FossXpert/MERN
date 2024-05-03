import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ResponsiveAppBar(){
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{textAlign:'left', marginTop:'10px'}}>
                    Udemy
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
  