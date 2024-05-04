import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { atomRememberMe, atomRole, atomUserName, decodePayload, isLoggedIn } from './atom';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface CustomSignInState {
  username : string,
  password : string,
  role? : string,
  remeberme? : boolean,
}

export default function CustomSignIn() {

  const [username,setUsername] : [string,(username:string)=>void] = useRecoilState(atomUserName);
  const [role,setRole] : [string,(role:string)=>void] = useRecoilState(atomRole);
  const [rememberme,setRemember] : [boolean,(rememberme:boolean)=>void] = useRecoilState(atomRememberMe);
  const [password,setPassword] : [string,(password:string)=>void] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    checkSignin();
  }
  const checkSignin = async(): Promise<void> =>{
      try {
        const body : CustomSignInState = {
            username,
            password,
        };
        const url = `${BASE_URL}/user/login?role=${role}`
        const response = await axios.post(url,body,{
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status >= 200 && response.status < 300) {
          isLoggedIn(true);
          console.log('Request successful:', response.data);
          localStorage.setItem('token',response.data.Token);
          console.log("decodePayload", decodePayload(response.data.Token))
          navigate('/dashboard')
        } else {
          console.log('Request failed:', response.statusText);
        }
      } catch (error) {
          console.log(error)
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
            Sign in
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                setPassword(e.target.value)
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={rememberme} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                setRemember(e.target.checked) //Learn here
              }} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

