import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../CSS/FacultyDashboard.css";
import { FaUserCircle, FaPlus } from "react-icons/fa";

export default function FacultyExamList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Exam List Page</h2>
          <FaUserCircle
            className="profile-icon"
            onClick={() => navigate("/Faculty/ProfilePage")}
          />
        </header>

        <div className="exam-list-page">

          {/* CREATE EXAM BUTTON */}
          <div className="exam-action-bar">
            <button
              className="create-exam-btn"
              onClick={() => navigate("/CreateExam")}
            >
              <FaPlus /> Create New Exam
            </button>
          </div>

          {/* CARD CONTAINER */}
          <div className="exam-card-container">

            <div
              className="category-box"
              onClick={() => navigate("/Faculty/UpcomingExams")}
            >
              <h3>Upcoming Exams</h3>
              <p>Create & manage scheduled exams</p>
            </div>

            <div
              className="category-box active"
              onClick={() => navigate("/Faculty/CurrentExams")}
            >
              <h3>Current Exams</h3>
              <p>Monitor live exams & students</p>
            </div>

            <div
              className="category-box"
              onClick={() => navigate("/Faculty/PastExams")}
            >
              <h3>Past Exams</h3>
              <p>Check papers & declare results</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
