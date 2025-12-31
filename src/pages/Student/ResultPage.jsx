import "../../CSS/ResultPage.css";
import { FaHome } from "react-icons/fa";

export default function ExamResultPage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="result-navbar">
        <div className="nav-left">ExamPortal</div>
        <div className="nav-right">
          <FaHome className="home-icon" />
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="result-page">

        {/* HEADER */}
        <div className="result-header">
          <h2>Exam Result</h2>
        </div>

        {/* SCORE SUMMARY */}
        <div className="score-summary">
          <div className="score-box">
            <h1>15 / 20</h1>
            <p>Exam Score</p>
          </div>

          <div className="result-status good">
            <h3>Good</h3>
            <p>Result Status</p>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="details-section">
          <div className="details-card">
            <h3>Student Details</h3>
            <p><strong>Name:</strong> Smit Pipalva</p>
            <p><strong>Roll No:</strong> 150</p>
            <p><strong>Department:</strong> IT</p>
          </div>

          <div className="details-card">
            <h3>Exam Details</h3>
            <p><strong>Name:</strong> DSA Mid Exam</p>
            <p><strong>Marks:</strong> 20</p>
            <p><strong>Type:</strong> MCQ</p>
            <p><strong>Duration:</strong> 30 Minutes</p>
            <p><strong>Date:</strong> 12 Feb 2025</p>
          </div>
        </div>

        {/* RANK */}
        <div className="rank-box">
          <h3>Class Rank</h3>
          <p>Your Rank: <strong>5</strong> / 150</p>
        </div>

        {/* QUESTION PREVIEW */}
        <div className="question-preview">
          <div className="question-preview-header">
            <h4>Q1. Who is Iron Man?</h4>
            <span>Marks: 3</span>
          </div>

          <ul className="answer-options">
            <li className="correct">A. Tony Stark</li>
            <li>B. Steve Rogers</li>
            <li>C. Bruce Banner</li>
            <li>D. Thor</li>
          </ul>
        </div>

        {/* BUTTON */}
        <div className="result-action">
          <button>See Full Exam with Answers</button>
        </div>

      </div>
    </>
  );
}
