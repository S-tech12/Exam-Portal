import Footer from "./../Footer";
import { useNavigate } from "react-router-dom";
import "../../CSS/Faculty/CreateExam.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";


export default function FacultyCreateExam() {
  const navigate = useNavigate();

  const [checkingType, setCheckingType] = useState("");



  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Create New Exam</h2>
          <FaUserCircle
            className="profile-icon"
            onClick={() => navigate("/Faculty/ProfilePage")}
          />
        </header>

        {/* BODY */}
        <div className="exam-list-page">
          <div className="create-exam-wrapper">

            {/* SECTION 1 */}
            <h3 className="section-title">Exam Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Exam Conducted By</label>
                <input type="text" placeholder="Faculty Name" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Subject Name" />
              </div>

              <div className="form-group">
                <label>Total Marks</label>
                <input type="number" placeholder="100" />
              </div>
            </div>

            {/* SECTION 2 */}
            <h3 className="section-title">Exam Configuration</h3>

            <div className="form-group">
              <label>Exam Type</label>
              <div className="option-row">
                <label><input type="radio" name="type" /> MCQ</label>
                <label><input type="radio" name="type" /> Numerical</label>
                <label><input type="radio" name="type" /> Q&A</label>
                <label><input type="radio" name="type" /> Mixed</label>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Exam Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Exam Time</label>
                <input type="time" />
              </div>

              <div className="form-group">
                <label>Duration (minutes)</label>
                <input type="number" placeholder="60" />
              </div>
            </div>

            {/* SECTION 3 */}
            <h3 className="section-title">Student Settings</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Student Batch</label>
                <select>
                  <option>2022-26</option>
                  <option>2023-27</option>
                  <option>2024-28</option>
                </select>
              </div>

              <div className="form-group">
                <label>Department</label>
                <select>
                  <option>IT</option>
                  <option>CE</option>
                  <option>ICT</option>
                </select>
              </div>
            </div>

            {/* SECTION 4 */}
            {/* SECTION 4 */}
            <h3 className="section-title">Paper Checking</h3>

            <div className="form-group">
              <label>Checking Type</label>

              <div className="option-row">
                <label>
                  <input
                    type="radio"
                    name="checking"
                    value="manual"
                    onChange={(e) => setCheckingType(e.target.value)}
                  />
                  Manual
                </label>

                <label>
                  <input
                    type="radio"
                    name="checking"
                    value="ai"
                    onChange={(e) => setCheckingType(e.target.value)}
                  />
                  AI
                </label>
              </div>
            </div>

            {/* PDF UPLOAD (CONDITIONAL) */}
            {checkingType && (
              <div className="form-group pdf-upload-box">
                <label>Upload Question Paper (PDF)</label>
                <input type="file" accept="application/pdf" />

                {checkingType === "manual" && (
                  <p className="pdf-warning manual">
                    ⚠️ Upload **PDF containing only questions**
                  </p>
                )}

                {checkingType === "ai" && (
                  <p className="pdf-warning ai">
                    🤖 Upload **PDF containing questions and their answers**
                  </p>
                )}
              </div>
            )}


            {/* SECTION 5 */}
            <h3 className="section-title">Result Declaration</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Result Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Result Time</label>
                <input type="time" />
              </div>
            </div>

            {/* ACTION */}
            <div className="action-area">
              <button className="cancel-btn" onClick={() => navigate(-1)}>
                Cancel
              </button>

              <button className="primary-btn">
                Generate Exam Schedule
              </button>
            </div>

            <p className="security-note">
              🔐 OTP verification & Face Recognition will be required before exam activation.
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
