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
import Typography, { TypographyProps } from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { atomEmail, atomRememberMe, atomRole, atomUserName } from './atom';
import axios from 'axios';
import { useState } from 'react';

function Copyright(props: TypographyProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CustomSignIn() {

  const [email,setEmail]:[string,(email:string)=>void] = useRecoilState(atomEmail);
  const [username,setUsername]:[string,(username:string)=>void] = useRecoilState(atomUserName);
  const [role,setRole]:[string,(role:string)=>void] = useRecoilState(atomRole);
  const [remeberme,setRemember]:[boolean,(rememberme:boolean)=>void] = useRecoilState(atomRememberMe);
  const [password,setPassword] : [string,(password:string)=>void] = useState("")
  //Hi Mate
  const handleSubmit = () => {
    checkSignin();
  }
  const checkSignin = async(): Promise<void> =>{
      try {
        const body = {
            email,
            username,
            password,
        };
        const url = `http://localhost:3001/user/login?role=${role}`
        const response = await axios.post(url,body,{
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status >= 200 && response.status < 300) {
          console.log('Request successful:', response.data);
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
          {
            
          }
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email/Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
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
              control={<Checkbox value="remember" color="primary" checked={remeberme} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}