import { useNavigate } from "react-router-dom";
import "../CSS/StudentDashboard.css";
import { FaUserCircle } from "react-icons/fa";
import Footer from "./Footer";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Exam List Page</h2>
          <FaUserCircle className="profile-icon" onClick={()=> navigate("/student/ProfilePage")} />
        </header>

        {/* CATEGORY BOXES */}
        <div className="exam-category">

          <div
            className="category-box"
            onClick={() => navigate("/student/exams/upcoming")}
          >
            <h3>Upcoming Exams</h3>
            <p>View all scheduled exams</p>
          </div>

          <div
            className="category-box active"
            onClick={() => navigate("/student/exams/current")}
          >
            <h3>Current Exams</h3>
            <p>Attempt live exams</p>
          </div>

          <div
            className="category-box"
            onClick={() => navigate("/student/exams/past")}
          >
            <h3>Past Exams</h3>
            <p>View results & history</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
