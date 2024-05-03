import { Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ResponsiveAppBar(){
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography>
                    Udemy
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
  