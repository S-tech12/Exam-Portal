import Footer from "../Footer";
import { FaUserCircle, FaChevronRight } from "react-icons/fa";
import "../../CSS/Faculty/PaperChecking.css";

export default function FacultyPaperChecking() {

    const students = [
        { id: 1, name: "Patel Dirdh P.", marks: "10 / 30" },
        { id: 2, name: "Patel Manav P.", marks: null },
    ];

    return (
        <>
            <div className="dashboard">

                <header className="dashboard-header">
                    <h1>Exam Portal</h1>
                    <h2>Paper Checking</h2>
                    <FaUserCircle className="profile-icon" />
                </header>

                <div className="paper-page">
                    {students.map((student) => (
                        <div className="paper-row-3d" key={student.id}>

                            <div className="col rank">
                                {student.id}
                            </div>

                            <div className="col name">
                                {student.name}
                            </div>

                            <div className="col action">
                                {student.marks ? (
                                    <span className="marks">{student.marks}</span>
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}
