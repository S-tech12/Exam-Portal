import { useNavigate } from "react-router-dom";
import "../../CSS/ExamInstruction.css";

export default function ExamInstructions() {

  const navigate = useNavigate();
  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <div className="card-body">
          <h3 className="card-title">Instructions</h3>
          <p className="card-subtitle">
            Welcome! Please read the instructions carefully before proceeding.
          </p>

          <div className="instructions-scroll">
            <h4>For Students:</h4>
            <ul>
              <li>You will receive an <b>email notification</b> with exam details: Subject, Marks, Exam Type, Duration, Faculty Name, and Course Details.</li>
              <li>On the day of the exam, you will get a reminder email so you don’t miss it.</li>
              <li>Before starting the exam, verify your identity via <b>OTP</b>. Advanced verification may include <b>face or fingerprint authentication</b>.</li>
              <li>During the exam, you can see: total questions, attempted, not attempted, and warning count.</li>
              <li>Exam duration is displayed in countdown; notifications appear at 10 and 5 minutes remaining.</li>
              <li>Click the <b>Submit</b> button to finish the exam; all answers will be stored in the backend.</li>
              <li>Cheating attempts trigger warnings; after 3 warnings, the exam auto-submits.</li>
              <li>Once submitted, the exam cannot be re-entered.</li>
              <li>After results are published, students can view results and analytics on their profile.</li>
              <li>Faculty may also leave remarks which are visible on the student profile, and an email will be sent to the respective faculty after exam completion.</li>
            </ul>
          </div>

          <button className="enter-exam-btn" onClick={()=> navigate("/ExamPage")}>Enter Exam</button>
        </div>
      </div>
    </div>
  );
}
