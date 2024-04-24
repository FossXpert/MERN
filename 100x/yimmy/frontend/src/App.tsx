import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import SignIn from './views/SignIn';

function App() {
  return (
    <Auth0Provider
    domain="dev-cd616eaxtu7so5dm.us.auth0.com"
    clientId="KGJKgNtQDN3DZB6EteTUwgKQbdHYGdep"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <div>
        <SignIn />
      </div>
    </Auth0Provider>
  );
}

export default App;
