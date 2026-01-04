import "./../../CSS/Student/PaperWithCorrectAnswer.css";
import { useState } from "react";
import { FaHome } from "react-icons/fa";


const questions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    question: `Sample Question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    submitted: Math.floor(Math.random() * 4),
    correct: Math.floor(Math.random() * 4),
}));

const QUESTIONS_PER_PAGE = 5;

export default function ExamReview() {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const currentQuestions = questions.slice(
        startIndex,
        startIndex + QUESTIONS_PER_PAGE
    );

    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

    return (
        <>
            {/* NAVBAR */}
            <nav className="result-navbar">
                <div className="nav-left">ExamPortal</div>
                <div className="nav-right">
                    <FaHome className="home-icon" onClick={() => navigate("/StudentDashboard")} />
                </div>
            </nav>

            <div className="review-page">
                {/* HEADER */}
                {/* <div className="review-header">
                    <h3>Student Name: <span>Smit Pipalva</span></h3>
                    <h4>Exam: <span>Data Structures</span></h4>
                </div> */}
                {/* STUDENT + EXAM INFO CARD */}
                <div className="info-card">
                    <h2>Class Rank</h2>
                    <p>Your Rank: <span>5</span> / 150</p>

                    <div className="info-row">
                        <div>
                            <label>Student Name</label>
                            <h4>Smit Pipalva</h4>
                        </div>

                        <div>
                            <label>Exam Name</label>
                            <h4>Data Structures</h4>
                        </div>
                    </div>
                </div>
                {/* QUESTION STATUS BOXES */}
                <div className="question-boxes">
                    {currentQuestions.map((q) => {
                        const isCorrect = q.submitted === q.correct;
                        return (
                            <div
                                key={q.id}
                                className={`q-box ${isCorrect ? "green" : "red"}`}
                            >
                                {q.id}
                            </div>
                        );
                    })}
                </div>

                {/* QUESTIONS */}
                {currentQuestions.map((q) => {
                    const isCorrect = q.submitted === q.correct;

                    return (
                        <div
                            key={q.id}
                            className={`question-card ${isCorrect ? "correct" : "wrong"}`}
                        >
                            <div className="question-header-ui">
                                <h3>Q{q.id}. {q.question}</h3>
                                <span className="marks">Marks: 3</span>
                            </div>


                            <div className="options">
                                {q.options.map((opt, index) => {
                                    let cls = "option";
                                    if (index === q.correct) cls += " correct-option";
                                    if (index === q.submitted && index !== q.correct)
                                        cls += " wrong-option";

                                    return (
                                        <div key={index} className={cls}>
                                            {String.fromCharCode(65 + index)}. {opt}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="answer-box">
                                <span>
                                    Submitted:
                                    <b className={isCorrect ? "green-text" : "red-text"}>
                                        {" "}
                                        {String.fromCharCode(65 + q.submitted)}
                                    </b>
                                </span>

                                {!isCorrect && (
                                    <span>
                                        Correct:
                                        <b className="green-text">
                                            {" "}
                                            {String.fromCharCode(65 + q.correct)}
                                        </b>
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* PAGINATION */}
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                    >
                        Previous
                    </button>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

