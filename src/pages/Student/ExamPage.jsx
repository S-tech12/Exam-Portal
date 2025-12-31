import Swal from "sweetalert2";
import "../../CSS/ExamPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ExamQuestionPage() {
    const navigate = useNavigate();
    const totalQuestions = 5;

    const [currentQ, setCurrentQ] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60 * 30); // 30 min
    const [warnings, setWarnings] = useState(0);

    // TIMER (WORKING)
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;
        return `${min}:${sec.toString().padStart(2, "0")}`;
    };

    const handleOptionClick = (index) => {
        setSelectedOptions(prev => ({
            ...prev,
            [currentQ]: index
        }));

        if (!attemptedQuestions.includes(currentQ)) {
            setAttemptedQuestions(prev => [...prev, currentQ]);
        }
    };

    const handleClear = () => {
        const updatedOptions = { ...selectedOptions };
        delete updatedOptions[currentQ];

        setSelectedOptions(updatedOptions);
        setAttemptedQuestions(prev =>
            prev.filter(q => q !== currentQ)
        );
    };

    const handleSubmitExam = () => {
        const attempted = attemptedQuestions.length;
        const notAttempted = totalQuestions - attempted;

        Swal.fire({
            title: "Submit Exam?",
            icon: "warning",
            html: `
            <div style="text-align:left">
                <p><strong>Attempted Questions:</strong> ${attempted}</p>
                <p><strong>Not Attempted Questions:</strong> ${notAttempted}</p>
                <hr />
                <p style="color:#b91c1c;">
                    ⚠️ Once you submit the exam, you cannot re-enter the exam.
                </p>
            </div>
        `,
            showCancelButton: true,
            confirmButtonText: "Submit Exam",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#22c55e",
            cancelButtonColor: "#6b7280",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Exam Submitted",
                    text: "Your exam has been submitted successfully!",
                    timer: 2000,
                    showConfirmButton: false,
                });

                // 🚀 TODO:
                // 1. Send answers to backend
                // 2. Navigate to result / dashboard page
                // navigate("/StudentDashboard");
                setTimeout(()=>{
                    navigate("/StudentDashboard");
                },2000);
            }
        });
    };


    return (
        <div className="exam-page">
            {/* EXAM HEADER */}
            <div className="exam-header-pro">
                <div className="exam-header-item">
                    <span className="label">Subject</span>
                    <span className="value">DSA</span>
                </div>

                <div className="exam-header-divider"></div>

                <div className="exam-header-item">
                    <span className="label">Exam Type</span>
                    <span className="value">MCQ</span>
                </div>

                <div className="exam-header-divider"></div>

                <div className="exam-header-item">
                    <span className="label">Total Marks</span>
                    <span className="value">30</span>
                </div>
            </div>

            {/* TOP STATUS BOX */}
            <div className="exam-topbar">

                {/* QUESTION NUMBERS */}
                <div className="question-palette-top">
                    {[...Array(totalQuestions)].map((_, i) => {
                        const qNo = i + 1;

                        return (
                            <div
                                key={qNo}
                                className={`q-box
                    ${currentQ === qNo ? "active" : ""}
                    ${attemptedQuestions.includes(qNo) ? "attempted" : ""}
                `}
                                onClick={() => setCurrentQ(qNo)}
                            >
                                {qNo}
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* QUESTION AREA */}
            <div className="question-layout">

                {/* LEFT - QUESTION */}
                <div className="question-card">
                    <div className="question-header">
                        <h3>Q{currentQ}. Who is the Iron Man?</h3>
                        <span className="question-marks">Marks: 3</span>
                    </div>

                    <div className="options">
                        {["Tony Stark", "Steve Rogers", "Bruce Banner", "Thor"].map(
                            (opt, index) => (
                                <div
                                    key={index}
                                    className={`option-box ${selectedOptions[currentQ] === index ? "selected" : ""
                                        }`}
                                    onClick={() => handleOptionClick(index)}
                                >
                                    {opt}
                                </div>
                            )
                        )}
                    </div>

                    {/* BUTTONS */}
                    <div className="nav-buttons">
                        <button className="clear-btn" onClick={handleClear} disabled={!attemptedQuestions.includes(currentQ)}> Clear</button>

                        <button disabled={currentQ === 1} onClick={() => setCurrentQ(prev => prev - 1)}> Previous</button>

                        {currentQ === totalQuestions ? (
                            <button className="submit-btn" onClick={handleSubmitExam}>
                                Submit Exam
                            </button>
                        ) : (
                            <button onClick={() => setCurrentQ(prev => prev + 1)}>
                                Next
                            </button>
                        )}
                    </div>

                </div>

                {/* RIGHT - STATUS */}
                <div className="side-status-box">
                    <div className="timer">⏱ Time Left : {formatTime()}</div>
                    <div className="warnings">⚠️ Warnings: {warnings}/3</div>

                    <div className="status status-attempted">
                        Attempted: {attemptedQuestions.length}
                    </div>
                    <div className="status status-not-attempted">
                        Not Attempted: {totalQuestions - attemptedQuestions.length}
                    </div>
                    <div className="status status-marked">
                        Marked: 0
                    </div>

                </div>

            </div>
        </div>
    );
}
