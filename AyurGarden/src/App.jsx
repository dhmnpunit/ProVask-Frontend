
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage"
import Learn from "./pages/Learn"
import { LoginSignup } from "./pages/LoginSignupPage/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/signin" element={<LoginSignup/>} />
        </Routes>
      </div>
    </BrowserRouter>

    </> 
  );

}

export default App
