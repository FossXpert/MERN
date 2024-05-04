import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useState } from 'react';
import { atomEmail, atomUserName } from './atom';
import { BASE_URL } from '../config';
import {signupUser} from '@rahulray8518/common'


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function CustomSignup() {
    const [email,setEmail]:[string,(email:string) => void] = useRecoilState(atomEmail);
    const [password,setPassword]:[string,(password:string) => void] = useState("");
    const [username,setUsername]:[string,(username:string) => void] = useRecoilState(atomUserName);

    const handleSignup = () =>{
        doSignup();
    }

    const doSignup = async():Promise<void> =>{
        try {
            const body : signupUser = {
                email,username,password
            }
            const response = await axios.post(`${BASE_URL}/user/signup`,body,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if(response.status>=200 && response.status<300){
                console.log('Request Passed',response.data);
                localStorage.setItem('token',response.data.Token);
            }else{
                console.log('Request failed:', response.statusText)
            }
        } catch (error) {
            throw(console.error());
        }
    }
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                setEmail(e.target.value)
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="username"
              type="username"
              id="username"
              autoComplete="username"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                setUsername(e.target.value)
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                setPassword(e.target.value)
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have an account ? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

