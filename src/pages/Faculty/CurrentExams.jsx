import { useState } from "react";
import Footer from "../Footer";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/CurrentExam.css";

export default function FacultyCurrentExams() {

  const [students, setStudents] = useState([
    {
      roll: 220170116049,
      name: "Rahul Sharma",
      department: "CSE",
      status: "Active",
      questionattempted: "20 / 20",
      attempted: true,
      submission: "Done",
      warnings: 0,
      face: "Verified",
      blocked: false,
    },
    {
      roll: 220170116050,
      name: "Aman Patel",
      department: "IT",
      status: "Warning",
      questionattempted: "10 / 20",
      attempted: true,
      submission: "Pending",
      warnings: 2,
      face: "Unstable",
      blocked: false,
    },
    {
      roll: 220170116051,
      name: "Neha Verma",
      department: "ICT",
      status: "Blocked",
      questionattempted: "5 / 20",
      attempted: true,
      submission: "Pending",
      warnings: 3,
      face: "Failed",
      blocked: true,
    },
  ]);
/* ---------- FILTER STATES ---------- */
  const [statusFilter, setStatusFilter] = useState("All");
  const [examFilter, setExamFilter] = useState("All");
  const [submissionFilter, setSubmissionFilter] = useState("All");
  const [search, setSearch] = useState("");

  /* ---------- MODAL STATES ---------- */
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [actionType, setActionType] = useState("");

  const openModal = (student) => {
    setSelectedStudent(student);
    setActionType(student.blocked ? "Unblock" : "Block");
    setShowModal(true);
  };

  const confirmAction = () => {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.roll === selectedStudent.roll
          ? {
              ...stu,
              blocked: !stu.blocked,
              status: !stu.blocked ? "Blocked" : "Active",
            }
          : stu
      )
    );
    setShowModal(false);
  };
  /* ---------- FILTER LOGIC ---------- */
  const filteredStudents = students.filter((stu) => {
    const statusMatch =
      statusFilter === "All" ||
      stu.status.toLowerCase() === statusFilter.toLowerCase();

    const examMatch =
      examFilter === "All" ||
      (examFilter === "Attempted" && stu.attempted) ||
      (examFilter === "Not Attempted" && !stu.attempted);

    const submissionMatch =
      submissionFilter === "All" ||
      stu.submission === submissionFilter;

    const searchMatch =
      stu.roll.toString().includes(search) ||
      stu.name.toLowerCase().includes(search.toLowerCase()) ||
      stu.department.toLowerCase().includes(search.toLowerCase());

    return statusMatch && examMatch && submissionMatch && searchMatch;
  });

  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Current Exam Monitoring</h2>
          <FaUserCircle className="profile-icon" />
        </header>

        <div className="current-exam-page">

          {/* EXAM SUMMARY */}
          <div className="exam-summary">
            <div>
              <h3>DSA Mid Term</h3>
              <p>Subject: Data Structures</p>
              <p>
                Time Left: <b>01:12:34</b>
              </p>
            </div>

            <div className="stats">
              <div className="stat-box">
                Total <br /> <b>120</b>
              </div>
              <div className="stat-box active">
                Active <br /> <b>98</b>
              </div>
              <div className="stat-box submitted">
                Submitted <br /> <b>15</b>
              </div>
              <div className="stat-box warning">
                Warnings <br /> <b>7</b>
              </div>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by Roll / Name / Department"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">Status: All</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
              <option value="Warning">Warning</option>
            </select>

            <select onChange={(e) => setExamFilter(e.target.value)}>
              <option value="All">Exam: All</option>
              <option value="Attempted">Attempted</option>
              <option value="Not Attempted">Not Attempted</option>
            </select>

            <select onChange={(e) => setSubmissionFilter(e.target.value)}>
              <option value="All">Submission: All</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {/* STUDENT TABLE */}
          <div className="monitor-table">
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Attempted</th>
                  <th>QuestionAttempted</th>
                  <th>Submission Status</th>
                  <th>Warnings</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((stu) => (
                  <tr
                    key={stu.roll}
                    className={stu.blocked ? "danger-row" : ""}
                  >
                    <td>{stu.roll}</td>
                    <td>{stu.name}</td>
                    <td className={stu.blocked ? "red" : "green"}>
                      {stu.blocked ? "Blocked" : stu.status}
                    </td>
                    <td>{stu.attempted ? "Attempted" : "Not Attempted"}</td>
                    <td>{stu.questionattempted}</td>
                    <td>{stu.submission}</td>
                    <td>{stu.warnings}</td>
                    <td>
                      <button
                        className={stu.blocked ? "unblock-btn" : "block-btn"}
                        onClick={() => openModal(stu)}
                      >
                        {stu.blocked ? "Unblock" : "Block"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h3>Confirm Action</h3>
            <p>
              Are you sure you want to <b>{actionType}</b>{" "}
              <b>{selectedStudent?.name}</b>?
            </p>
            <p className="warning-text">
              This action can’t be irreversible.
            </p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className={`confirm-btn ${
                  actionType === "Block" ? "danger" : ""
                }`}
                onClick={confirmAction}
              >
                Yes, {actionType}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
