import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomSignIn from './components/CustomSignIn';
import CustomSignup from './components/CustomSignup';

function App() {
  return (
    <Auth0Provider
    domain="dev-cd616eaxtu7so5dm.us.auth0.com"
    clientId="KGJKgNtQDN3DZB6EteTUwgKQbdHYGdep"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience : "This is a unique Identifier"
    }}
  >
    <Router>
      <Routes> 
        <Route path='/' element={<CustomSignIn/>} />
        <Route path='/signup' element={<CustomSignup/>} />
        <Route path='/signin' element={<CustomSignIn/>}/>
      </Routes>
    </Router>

    </Auth0Provider>
  );
}

export default App;
