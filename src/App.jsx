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
import CreateExam from "./pages/Faculty/CreateExam"
import ExamCalendar from "./pages/ExamCalendar";
import UpcomingExamForFaculty from "./pages/Faculty/UpcomingExam";
import CurrentExamForFaculty from "./pages/Faculty/CurrentExams";
import PastExamForFaculty from "./pages/Faculty/PastExams";
import FacultyExamAnalysis from "./pages/Faculty/AnalysisPage";
import FacultyPaperChecking from "./pages/Faculty/PaperCheckingPage";
import FacultyAnswerChecking from "./pages/Faculty/FacultyAnswerChecking";

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
          <Route path="/CreateExam" element={<CreateExam />} />
          <Route path="/ExamCalendar" element={<ExamCalendar />} />
          <Route path="/Faculty/UpcomingExams" element={<UpcomingExamForFaculty />} />
          <Route path="/Faculty/CurrentExams" element={<CurrentExamForFaculty />} />
          <Route path="/Faculty/PastExams" element={<PastExamForFaculty />} />
          <Route path="/Faculty/PastExams/FacultyExamAnalysis" element={<FacultyExamAnalysis />} />
          <Route path="/Faculty/PastExams/FacultyPaperChecking" element={<FacultyPaperChecking />} />
          <Route path="/Faculty/PastExams/FacultyAnswerChecking" element={<FacultyAnswerChecking />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App