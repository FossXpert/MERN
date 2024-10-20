import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SignUp from './components/imported/signup/SignUp';
import ViewOneCourse from './components/ViewOneCourse';
import Kuku from './components/K';
   // This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <>
         <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createCourse" element={<CreateCourse />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/courses/:courseID" element={<ViewOneCourse />} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/k' element={<Kuku/>}/>
            </Routes>
        </Router>
        </>
     );
}

export default App;