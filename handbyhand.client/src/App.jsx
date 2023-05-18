import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";
import AdvancedSearchPage from "./components/AdvancedSearchPage/AdvancedSearchPage";
import Navbar from './components/General/NavBar';

import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  // logic to set the loggedIn state based on user authentication status
  // ...

  // render the navbar only if the user is logged in and not on the login page
  //--TODO-- check if the user loged in and then change to
 // if (loggedIn && location.pathname !== '/login') 
  if (location.pathname !== '/' && location.pathname !== '/signup') {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/createevent" element={<CreateEventPage />} />
          <Route path="/advancedsearch" element={<AdvancedSearchPage />} />



        </Routes>

      </div>
    );
  }

  else if(location.pathname == '/signup') {
    return (
      <div className="App">
        {/* login page content */}
        <SignUpPage />
      </div>
    );
  }

  // render the login page without the navbar
  else {
    return (
      <div className="App">
        {/* login page content */}
        <LoginPage />
      </div>
    );
  }

}

export default App
