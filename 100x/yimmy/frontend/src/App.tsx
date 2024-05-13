import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomSignIn from './components/CustomSignIn';
import CustomSignup from './components/CustomSignup';
import ShowCourses from './components/ShowCourses';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import CreateCourses from './components/CreateCourses';
import InstructorLandingPage from './components/InstructorLandingPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Landing/>} />
        <Route path='/signup' element={<CustomSignup/>} />
        <Route path='/signin' element={<CustomSignIn/>}/>
        <Route path="/all-courses" element={<ShowCourses />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/instructor' element={<InstructorLandingPage/>}/>
        <Route path='/createcourse' element={<CreateCourses/>}/>
      </Routes>
    </Router>
  );
}

export default App;
