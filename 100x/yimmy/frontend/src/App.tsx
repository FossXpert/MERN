import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';

function App() {
  return (
    <Auth0Provider
    domain="dev-cd616eaxtu7so5dm.us.auth0.com"
    clientId="OdgLGaXnzwfjsvs8MxZYNEB9B46zsySS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>

    </Auth0Provider>
  );
}

export default App;
