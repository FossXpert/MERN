import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Auth0SignIn = () => {
  const { loginWithRedirect, isAuthenticated, user,logout } = useAuth0();

  // Display user details if authenticated ok
  const userDetails = isAuthenticated ? (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Profile Picture: <img src={user.picture} alt="Profile" /></p>
    </div>
  ) : null;

  return (
    <div>
      <h2>Sign In with Auth0</h2>
      <Button onClick={() => loginWithRedirect()}>Sign In</Button>
      {userDetails}
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
};

export default Auth0SignIn;
