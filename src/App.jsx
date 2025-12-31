import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import UpcomingExams from "./pages/Student/UpcomingExams";
import PastExams from "./pages/Student/PastExams";
import CurrentExams from "./pages/Student/CurrentExams";
import ExamInstructions from "./pages/Student/ExamInstructions";
import ExamPage from "./pages/Student/ExamPage";
import ResultPage from "./pages/Student/ResultPage"
import ProfilePage from "./pages/Student/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/AuthPage" element={<AuthPage />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
          <Route path="/student/exams/upcoming" element={<UpcomingExams />} />
          <Route path="/student/exams/current" element={<CurrentExams />} />
          <Route path="/student/exams/past" element={<PastExams />} />
          <Route path="/ExamInstructions" element={<ExamInstructions />} />
          <Route path="/ExamPage" element={<ExamPage />} />
          <Route path="/ResultPage" element={<ResultPage />} />
          <Route path="/student/ProfilePage" element={<ProfilePage />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App