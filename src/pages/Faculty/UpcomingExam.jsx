import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/UpcomingExam.css";

export default function FacultyUpcomingExams() {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Upcoming Exams</h2>
          <FaUserCircle
            className="profile-icon"
            onClick={() => navigate("/Faculty/ProfilePage")}
          />
        </header>

        <div className="upcoming-page">

          {/* TOP BAR */}
          <div className="top-bar">
            <input type="text" placeholder="Search exam..." />
            <button onClick={() => navigate("/CreateExam")}>
              + Create Exam
            </button>
          </div>

          {/* EXAM CARD */}
          <div className="exam-list">

            <div className="exam-item">
              <div className="exam-left">
                <h3>DSA Mid Term</h3>
                <p><b>Subject:</b> Data Structures</p>
                <p><b>Date:</b> 10 Jan 2026</p>
                <p><b>Time:</b> 10:00 AM – 12:00 PM</p>
                <p><b>Type:</b> MCQ</p>
                <p><b>Total Marks:</b> 60</p>
              </div>

              <div className="exam-right">
                <span className="status scheduled">Scheduled</span>

                <button>Students</button>
                <button>Paper</button>
                <button className="danger">Cancel</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
