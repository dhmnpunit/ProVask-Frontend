
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage"
import Learn from "./pages/Learn"
// App.jsx
import LoginSignup from './pages/LoginSignupPage/LoginSignup';  // Change this line
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs'
import RoleSelection from "./pages/LoginSignupPage/RoleSelection";
import LearnerDashboard from "./pages/Dashboard/LearnerDashboard";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard";
import CourseCreationForm from "./components/CourseCreationForm";


const AppContent = () => {
  const location = useLocation();
  
  // Only show header if we're not on the dashboard page
  const showHeader = location.pathname !== '/learner-dashboard' && location.pathname !== '/instructor-dashboard' && location.pathname !== '/instructor-dashboard/create-course';

  return (
    <div className="min-h-screen bg-background">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/signin" element={<LoginSignup/>} />
        <Route path="/role-selection" element={<RoleSelection/>} />
        <Route path="/learner-dashboard" element={<LearnerDashboard/>} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard/>} />
        <Route path="/instructor-dashboard/create-course" element={<CourseCreationForm/>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;