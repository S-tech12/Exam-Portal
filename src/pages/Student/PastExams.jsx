import { useNavigate } from "react-router-dom";

import "../../CSS/ExamList.css";
import Footer from "../Footer";

export default function PastExams() {
  const navigate = useNavigate();


  return (
    <>
      <div className="exam-list-page">
        <h2>📘 Past Exams</h2>

        <button className="back-btn" onClick={() => navigate("/StudentDashboard")}>
          ← Back to Dashboard
        </button>
        <div className="exam-grid">
          <div className="exam-card past">
            <span className="badge completed-badge">COMPLETED</span>
            <h3>DBMS</h3>
            <p className="exam-date">📆 10 Jan 2025</p>
            <button className="secondary-btn" onClick={()=> navigate("/ResultPage")}>View Result</button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
