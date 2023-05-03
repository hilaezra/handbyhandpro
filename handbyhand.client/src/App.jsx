import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";
import AdvancedSearchPage from "./components/AdvancedSearchPage/AdvancedSearchPage";
import Navbar from './components/General/NavBar';

import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Navbar/>
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
  )
}

export default App
