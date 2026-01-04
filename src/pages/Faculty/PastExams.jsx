import Footer from "../Footer";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/PastExams.css";

export default function FacultyPastExams() {
  const examsData = [
    {
      examName: "DSA Mid Term",
      subject: "IT",
      date: "2025-09-12",
      students: 118,
      checking: "AI",
      checkingStatus: "Done",
      resultStatus: "Declared"
    },
    {
      examName: "Operating Systems",
      subject: "IT",
      date: "2025-09-05",
      students: 120,
      checking: "Manual",
      checkingStatus: "Not Done",
      resultStatus: "Under Checking"
    },
    {
      examName: "Computer Networks",
      subject: "IT",
      date: "2025-08-20",
      students: 115,
      checking: "AI",
      checkingStatus: "Not Done",
      resultStatus: "Pending"
    }
  ];

  const [filters, setFilters] = useState({
    resultStatus: "",
    checking: "",
    date: "",
    department: ""
  });

  const filteredExams = examsData.filter(exam => {
    return (
      (filters.resultStatus === "" || exam.resultStatus === filters.resultStatus) &&
      (filters.checking === "" || exam.checking === filters.checking) &&
      (filters.department === "" || exam.subject === filters.department) &&
      (filters.date === "" || exam.date === filters.date)
    );
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [showWarning, setShowWarning] = useState(false);


  const handleStartEvaluation = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);

    // Later: API call will go here
    // axios.post("/start-ai-evaluation", exam)
  };

  const handleDeclareResult = (exam) => {
    if (exam.checkingStatus === "Not Done") {
      setShowWarning(true);
      return;
    }

    // Future API call
    alert(`Result declared for ${exam.examName}`);
  };


  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Past Exams</h2>
          <FaUserCircle className="profile-icon" />
        </header>

        <div className="filter-bar">

          <select onChange={(e) => setFilters({ ...filters, resultStatus: e.target.value })}>
            <option value="">Result Status</option>
            <option value="Declared">Declared</option>
            <option value="Pending">Pending</option>
            <option value="Under Checking">Under Checking</option>
          </select>

          <select onChange={(e) => setFilters({ ...filters, checking: e.target.value })}>
            <option value="">Checking</option>
            <option value="Manual">Manual</option>
            <option value="AI">AI</option>
          </select>

          <input
            type="date"
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />

          <select onChange={(e) => setFilters({ ...filters, department: e.target.value })}>
            <option value="">Department</option>
            <option value="IT">IT</option>
            <option value="CE">CE</option>
            <option value="CSE">CSE</option>
          </select>

        </div>

        <div className="past-exams-page">

          <div className="page-title">Completed Exams</div>

          <div className="exam-table-card">
            <table>
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Students</th>
                  <th>Checking</th>
                  <th>Checking Status</th>
                  <th>Declare Result</th>
                  <th>Result Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredExams.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      No exams found
                    </td>
                  </tr>
                ) : (
                  filteredExams.map((exam, index) => (
                    <tr key={index}>
                      <td>{exam.examName}</td>
                      <td>{exam.subject}</td>
                      <td>{new Date(exam.date).toDateString()}</td>
                      <td>{exam.students}</td>
                      <td>{exam.checking}</td>
                      <td className={exam.checkingStatus === "Done" ? "done" : "not-done"}>
                        {exam.checkingStatus}
                      </td>

                      <td>
                        <button
                          className={`declare-btn ${exam.checkingStatus === "Not Done" ? "disabled" : ""
                            }`}
                          disabled={exam.checkingStatus === "Not Done"}
                          onClick={() => handleDeclareResult(exam)}
                        >
                          Declare
                        </button>
                      </td>
                      <td className={exam.resultStatus.toLowerCase().replace(" ", "-")}>
                        {exam.resultStatus}
                      </td>
                      <td>
                        {exam.resultStatus === "Declared" && (
                          <button className="view">View</button>
                        )}

                        {exam.checking === "Manual" && exam.resultStatus === "Under Checking" && (
                          <button className="check">Check Papers</button>
                        )}

                        {exam.checking === "AI" &&
                          (exam.resultStatus === "Pending" ||
                            exam.resultStatus === "Under Checking") && (
                            <button
                              className="start"
                              onClick={() => handleStartEvaluation(exam)}
                            >
                              Start Evaluation
                            </button>
                          )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>AI Evaluation Started</h2>

            <p>
              The AI-based evaluation for
              <strong> {selectedExam?.examName} </strong>
              has started in the background.
            </p>

            <p className="email-info">
              📧 Once the evaluation is completed, a success email will be sent to
              your registered email ID.
            </p>

            <button className="close-btn" onClick={() => setShowModal(false)}>
              Okay
            </button>
          </div>
        </div>
      )}

      {showWarning && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon">⚠</div>

            <h2>Action Required</h2>

            <p>
              Paper checking is not completed yet.
            </p>

            <div className="email-info">
              Please complete the evaluation before declaring the result.
            </div>

            <button className="close-btn" onClick={() => setShowWarning(false)}>
              Okay
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
