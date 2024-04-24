import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import SignIn from './views/SignIn';


const domain = "dev-cd616eaxtu7so5dm.us.auth0.com"
const clientId = "Taa9lZEEXS6JSSGDViJVwwtJunorSJ0D"

function App() {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <div>
        <SignIn />
      </div>
    </Auth0Provider>
  );
}

export default App;
