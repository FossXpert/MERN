import { useState } from "react";
import axios from 'axios';
function Kuku() {

    const [userProfile, setUserProfile] = useState(null);
    const handleSignIn = async () => {
    try {
      // Make a GET request to initiate the Google authentication process
      const response = await axios.get('http://localhost:3001/auth/google');
      // Redirect to Google authentication page
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Google authentication:', error);
    }
  };

    const fetchUserProfile = async () => {
    try {
      // Make a GET request to fetch user profile after successful authentication
      const response = await axios.get('http://localhost:3001/success');
      // Update state with user profile
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

    return <div>
      <h2>Sign In with Google</h2>
      {!userProfile ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <div>
          <h3>Welcome, {userProfile.displayName}</h3>
          <p>Email: {userProfile.emails[0].value}</p>
          <img src={userProfile.photos[0].value} alt="Profile" />
        </div>
      )}
      <button onClick={fetchUserProfile}>Fetch User Profile</button>
    </div>
}
export default Kuku;