import Footer from "../Footer";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/AnswerChecking.css";

export default function FacultyAnswerChecking() {
    return (
        <>
            <div className="dashboard">

                {/* HEADER */}
                <header className="dashboard-header">
                    <h1>Exam Portal</h1>
                    <h2>Answer Checking</h2>
                    <FaUserCircle className="profile-icon" />
                </header>

                <div className="answer-page">

                    {/* QUESTION HEADER */}
                    <div className="question-header">
                        <h3>Question 1</h3>
                        <span className="max-marks">Marks: 3</span>
                    </div>

                    {/* QUESTION */}
                    <div className="qa-box question-box">
                        <h4>Question</h4>
                        <p>
                            Explain the concept of Stack and its applications.
                        </p>
                    </div>

                    {/* STUDENT ANSWER */}
                    <div className="qa-box answer-box">
                        <h4>Student Answer</h4>
                        <p>
                            Stack is a linear data structure which follows LIFO.
                            It is used in function calls, undo-redo operations,
                            expression evaluation, etc.
                        </p>
                    </div>

                    {/* CONTROLS */}
                    <div className="qa-controls">

                        <button className="nav-btn">Previous</button>

                        <div className="marks-input">
                            <input type="number" min="0" max="3" />
                            <span>/ 3</span>
                        </div>

                        <button className="nav-btn primary">Next</button>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
