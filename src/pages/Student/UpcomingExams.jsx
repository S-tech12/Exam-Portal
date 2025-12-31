import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer";
import "../../CSS/ExamList.css";

export default function UpcomingExams() {
  const navigate = useNavigate();

  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    {
      subject: "Web Development",
      date: "20 Jan 2025",
      time: "10:00 AM – 11:00 AM",
      duration: "1 Hour",
      totalMarks: 100,
      instructions: "No mobile phones allowed. Camera must be ON."
    },
    {
      subject: "Data Science",
      date: "22 Jan 2025",
      time: "02:00 PM – 03:00 PM",
      duration: "1 Hour",
      totalMarks: 100,
      instructions: "Calculator allowed. No tab switching."
    }
  ];

  return (
    <>
      <div className="exam-list-page">
        <h2>📅 Upcoming Exams</h2>

        <button className="back-btn" onClick={() => navigate("/StudentDashboard")}>
          ← Back to Dashboard
        </button>

        <div className="exam-grid">
          {exams.map((exam, index) => (
            <div className="exam-card upcoming" key={index}>
              <h3>{exam.subject}</h3>
              <p className="exam-date">📆 {exam.date}</p>
              <p className="exam-time">⏰ {exam.time}</p>

              <button
                className="secondary-btn"
                data-bs-toggle="modal"
                data-bs-target="#examDetailsModal"
                onClick={() => setSelectedExam(exam)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* ================= BOOTSTRAP MODAL ================= */}
        <div
          className="modal fade"
          id="examDetailsModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedExam?.subject}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <p><strong>Date:</strong> {selectedExam?.date}</p>
                <p><strong>Time:</strong> {selectedExam?.time}</p>
                <p><strong>Duration:</strong> {selectedExam?.duration}</p>
                <p><strong>Total Marks:</strong> {selectedExam?.totalMarks}</p>
                <p><strong>Instructions:</strong></p>
                <p>{selectedExam?.instructions}</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
}
