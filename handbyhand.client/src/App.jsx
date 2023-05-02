import LoginPage from "./components/LoginPage/LoginPage"
import SignUpPage from "./components/SignUpPage/SignUpPage"
import HomePage from "./components/HomePage/HomePage";
import {Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />


      </Routes>
    </>
  )
}

export default App
