import Footer from "../Footer";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/PastExams.css";

export default function FacultyPastExams() {
  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Past Exams</h2>
          <FaUserCircle className="profile-icon" />
        </header>

        <div className="past-exams-page">

          <div className="page-title">Completed Exams</div>

          <div className="exam-table-card">
            <table>
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Students</th>
                  <th>Checking</th>
                  <th>Result Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>DSA Mid Term</td>
                  <td>IT</td>
                  <td>12 Sep 2025</td>
                  <td>118</td>
                  <td>AI</td>
                  <td className="declared">Declared</td>
                  <td><button className="view">View</button></td>
                </tr>

                <tr className="checking-row">
                  <td>Operating Systems</td>
                  <td>IT</td>
                  <td>05 Sep 2025</td>
                  <td>120</td>
                  <td>Manual</td>
                  <td className="checking">Under Checking</td>
                  <td><button className="check">Check Papers</button></td>
                </tr>

                <tr className="pending-row">
                  <td>Computer Networks</td>
                  <td>IT</td>
                  <td>20 Aug 2025</td>
                  <td>115</td>
                  <td>AI</td>
                  <td className="pending">Pending</td>
                  <td><button className="start">Start Evaluation</button></td>
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
