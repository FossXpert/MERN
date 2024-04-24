import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Auth0SignIn = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  // Display user details if authenticated
  const userDetails = isAuthenticated ? (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Profile Picture: <img src={user.picture} alt="Profile" /></p>
      {/* Add more details as needed */}
    </div>
  ) : null;

  return (
    <div>
      <h2>Sign In with Auth0</h2>
      <Button onClick={() => loginWithRedirect()}>Sign In</Button>
      {userDetails}
    </div>
  );
};

export default Auth0SignIn;
