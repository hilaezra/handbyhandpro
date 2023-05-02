import LoginPage from "./components/LoginPage/LoginPage"
import SignInPage from "./components/LoginPage/SignInPage"
import {Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
