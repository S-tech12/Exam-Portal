import Footer from "../Footer";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/CurrentExam.css";

export default function FacultyCurrentExams() {
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
              <p>Time Left: <b>01:12:34</b></p>
            </div>

            <div className="stats">
              <div className="stat-box">Total<br /><b>120</b></div>
              <div className="stat-box active">Active<br /><b>98</b></div>
              <div className="stat-box submitted">Submitted<br /><b>15</b></div>
              <div className="stat-box warning">Warnings<br /><b>7</b></div>
            </div>
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
                  <th>Warnings</th>
                  <th>Face Verify</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>101</td>
                  <td>Rahul Sharma</td>
                  <td className="green">Active</td>
                  <td>12 / 20</td>
                  <td>0</td>
                  <td className="green">Verified</td>
                  <td><button>View</button></td>
                </tr>

                <tr className="warn-row">
                  <td>102</td>
                  <td>Aman Patel</td>
                  <td className="yellow">Warning</td>
                  <td>10 / 20</td>
                  <td>2</td>
                  <td className="yellow">Unstable</td>
                  <td><button className="warn">Warn</button></td>
                </tr>

                <tr className="danger-row">
                  <td>103</td>
                  <td>Neha Verma</td>
                  <td className="red">Blocked</td>
                  <td>5 / 20</td>
                  <td>3</td>
                  <td className="red">Failed</td>
                  <td><button className="danger">Blocked</button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
