import Footer from "./Footer";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../CSS/ExamCalendar.css";

export default function ExamCalendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const examSchedule = {
    "2026-01-03": [
      { name: "DSA Mid Term", time: "10:00 AM - 12:00 PM" }
    ],
    "2026-01-07": [
      { name: "OS Quiz", time: "02:00 PM - 03:00 PM" }
    ],
    "2026-01-10": [
      { name: "DBMS Final", time: "09:00 AM - 12:00 PM" }
    ]
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 31;

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  return (
    <>
      <div className="dashboard">

        {/* HEADER */}
        <header className="dashboard-header">
          <h1>Exam Portal</h1>
          <h2>Exam Calendar</h2>
          <FaUserCircle
            className="profile-icon"
            onClick={() => navigate("/Faculty/ProfilePage")}
          />
        </header>

        {/* CALENDAR */}
        <div className="calendar-page">
          <div className="calendar-card">

            <div className="calendar-header">
              <h3>January 2026</h3>
            </div>

            <div className="calendar-grid">
              {days.map(day => (
                <div key={day} className="calendar-day-name">{day}</div>
              ))}

              {[...Array(totalDays)].map((_, i) => {
                const date = i + 1;
                const fullDate = `2026-01-${String(date).padStart(2, "0")}`;
                const hasExam = examSchedule[fullDate];

                return (
                  <div
                    key={date}
                    className="calendar-date"
                    onClick={() => handleDateClick(fullDate)}
                  >
                    <span>{date}</span>
                    {hasExam && <div className="exam-dot"></div>}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="exam-modal-overlay">
          <div className="exam-modal">
            <h3>Exams on {selectedDate}</h3>

            {examSchedule[selectedDate] ? (
              examSchedule[selectedDate].map((exam, index) => (
                <div key={index} className="exam-detail">
                  <p><strong>{exam.name}</strong></p>
                  <p>{exam.time}</p>
                </div>
              ))
            ) : (
              <p className="no-exam">No exams scheduled on this date</p>
            )}

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
