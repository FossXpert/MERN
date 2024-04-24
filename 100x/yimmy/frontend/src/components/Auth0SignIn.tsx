// Auth0SignIn.jsx

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Auth0SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Sign In with Auth0</h2>
      <Button onClick={() => loginWithRedirect()}>Sign In</Button>
    </div>
  );
};

export default Auth0SignIn;
