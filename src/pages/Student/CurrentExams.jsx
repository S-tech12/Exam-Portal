import { useNavigate } from "react-router-dom";
import "../../CSS/ExamList.css";
import Footer from "../Footer";

export default function CurrentExams() {
  const navigate = useNavigate();

  return (
    <>
      <div className="exam-list-page">
        <h2>🟢 Current Exams</h2>

        <button className="back-btn" onClick={() => navigate("/StudentDashboard")}>
          ← Back to Dashboard
        </button>

        <div className="exam-grid">
          <div className="exam-card live">
            <span className="badge live-badge">LIVE</span>

            <h3>Operating Systems</h3>

            <div className="exam-meta">
              <p>📅 <strong>Date:</strong> 18 Jan 2025</p>
              <p>⏰ <strong>Time:</strong> 10:00 – 11:00 AM</p>
              <p>⏳ <strong>Duration:</strong> 60 Minutes</p>
              <p>📝 <strong>Total Marks:</strong> 100</p>
            </div>

            <div className="exam-divider"></div>

            <p className="exam-instructions">
              ⚠️ Camera must be ON. Switching tabs is not allowed.
            </p>

            <button className="primary-btn" onClick={()=> navigate("/ExamInstructions")}>Start Exam</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
