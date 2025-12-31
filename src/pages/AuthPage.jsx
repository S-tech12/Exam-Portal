import { useState, useRef } from "react";
import "../CSS/AuthPage.css";
import LoginMeme from "../Images/Login_meme.png";
import SignupMeme from "../Images/Signup_meme.png";
import { div } from "framer-motion/client";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  // State for Enrollment (e.g.,12 digits)
  const [enrollment, setEnrollment] = useState(new Array(12).fill(""));
  const inputRefs = useRef([]);

  // State & Refs for Mobile (10 digits)
  const [mobile, setMobile] = useState(new Array(10).fill(""));
  const mobileRefs = useRef([]);

  // Generic handler for digit changes
  const handleDigitChange = (value, index, state, setState, refs) => {
    if (isNaN(value)) return;
    const newState = [...state];
    newState[index] = value;
    setState(newState);

    if (value !== "" && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index, state, refs) => {
    if (e.key === "Backspace" && !state[index] && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  const togglePassword = (id, eyeId) => {
    const input = document.getElementById(id);
    const eye = document.getElementById(eyeId);

    if (input.type === "password") {
      input.type = "text";
      eye.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      eye.classList.replace("fa-eye-slash", "fa-eye");
    }
  };

  const setupOtpInputs = () => {
    const inputs = document.querySelectorAll(".otp-input");

    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (isNaN(e.target.value)) {
          e.target.value = "";
          return;
        }

        if (e.target.value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  };

  const handleSignup = async () => {

    // STEP 1: OTP MODAL
    const { value: otp } = await Swal.fire({
      title: "OTP Verification",
      input: "text",
      inputPlaceholder: "Enter 6-digit OTP",
      inputAttributes: {
        maxlength: 6,
      },
      confirmButtonText: "Verify OTP",
      allowOutsideClick: false,
      preConfirm: (value) => {
        if (!value || value.length !== 6) {
          Swal.showValidationMessage("Enter valid 6-digit OTP");
        }
        return value;
      },
    });

    if (!otp) return;

    // STEP 2: PASSWORD MODAL
    await Swal.fire({
      title: "Set Password",
      html: `
      <div class="swal-input-wrapper">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
        <i id="eye1" class="fa-solid fa-eye eye-icon"
           onclick="window.togglePassword('password','eye1')"></i>
      </div>

      <div class="swal-input-wrapper">
        <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirm Password">
        <i id="eye2" class="fa-solid fa-eye eye-icon"
           onclick="window.togglePassword('confirmPassword','eye2')"></i>
      </div>
    `,
      confirmButtonText: "Create Account",
      allowOutsideClick: false,
      focusConfirm: false,
      didOpen: () => {
        window.togglePassword = togglePassword;
      },
      preConfirm: () => {
        const pass = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;

        if (!pass || !confirm) {
          Swal.showValidationMessage("Both fields are required");
          return false;
        }

        if (pass.length < 6) {
          Swal.showValidationMessage("Password must be at least 6 characters");
          return false;
        }

        if (pass !== confirm) {
          Swal.showValidationMessage("Passwords do not match");
          return false;
        }

        return true;
      },
    });

    // STEP 3: SUCCESS
    await Swal.fire({
      icon: "success",
      title: "Account Created 🎉",
      text: "Login credentials have been sent to your registered email address. Please check your inbox and sign in to access your account.You can now login to your account",
      confirmButtonText: "Go to Login",
      allowOutsideClick: false
    });

    // 🔥 SWITCH TO LOGIN WITH ANIMATION
    setIsSignup(false);
  };

  const handleLogin = () => {
    if (role === "student") {
      navigate("/StudentDashboard");
    } else if (role === "faculty") {
      navigate("/FacultyDashboard");
    }
  };

  const handleForgotPassword = () => {
    // Generate 3 random numbers
    const numbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 100)
    );

    // Pick one as correct
    const correctNumber = numbers[Math.floor(Math.random() * 3)];

    Swal.fire({
      title: "Forgot Password",
      html: `
      <p style="margin-bottom:10px;">
        Select the number which is sent to your registered email
      </p>

      <input 
        type="email" 
        class="swal2-input" 
        value="user@example.com" 
        readonly
      />

      <div class="number-box-container">
        ${numbers
          .map(
            (num) =>
              `<div class="number-box" data-value="${num}">${num}</div>`
          )
          .join("")}
      </div>
    `,
      confirmButtonText: "Verify",
      allowOutsideClick: false,
      didOpen: () => {
        let selected = null;

        document.querySelectorAll(".number-box").forEach((box) => {
          box.addEventListener("click", () => {
            document
              .querySelectorAll(".number-box")
              .forEach((b) => b.classList.remove("selected"));

            box.classList.add("selected");
            selected = box.getAttribute("data-value");
          });
        });

        Swal.getConfirmButton().addEventListener("click", () => {
          if (!selected) {
            Swal.showValidationMessage("Please select a number");
            return;
          }

          if (parseInt(selected) !== correctNumber) {
            Swal.showValidationMessage("Incorrect number selected");
            return;
          }
        });
      },
      preConfirm: () => true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Password Sent",
          text: "Your password has been sent to your registered email ID.",
        });
      }
    });
  };



  return (
    <div className="auth-page">

      <div className={`auth-container ${isSignup ? "active" : ""}`}>
        {/* SIGN UP FORM */}
        <div className="form-container sign-up">
          <form className="AuthForm">
            <h1>Create Account</h1>

            <div className="role-selection">
              <label className={role === "student" ? "selected" : ""}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Student
              </label>
              <label className={role === "faculty" ? "selected" : ""}>
                <input
                  type="radio"
                  name="role"
                  value="faculty"
                  checked={role === "faculty"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Faculty
              </label>
            </div>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email ID" />
            <input type="text" placeholder="Department" />
            <p className="field-label">Mobile Number</p>
            <div className="digit-group">
              <input className="digit-input" type="text" value={"+91"} readOnly />
              {/* <div className="digit-input">+91</div> */}
              {mobile.map((data, index) => (
                <input
                  className="digit-input"
                  type="text"
                  maxLength="1"
                  key={index}
                  value={data}
                  ref={(el) => (mobileRefs.current[index] = el)}
                  onChange={(e) => handleDigitChange(e.target.value, index, mobile, setMobile, mobileRefs)}
                  onKeyDown={(e) => handleKeyDown(e, index, mobile, mobileRefs)}
                />
              ))}
            </div>

            {/* WRAPPER FOR SMOOTH TRANSITION */}
            <div className={`dynamic-fields ${role === "student" ? "open" : ""}`}>
              <p className="field-label">Enrollment No.</p>
              <div className="digit-group">
                {enrollment.map((data, index) => (
                  <input
                    className="digit-input"
                    type="text"
                    name="enrollment"
                    maxLength="1"
                    key={index}
                    value={data}
                    ref={(el) => (inputRefs.current[index] = el)}
                    // FIX: Added the missing state, setState, and refs arguments
                    onChange={(e) => handleDigitChange(e.target.value, index, enrollment, setEnrollment, inputRefs)}
                    onKeyDown={(e) => handleKeyDown(e, index, enrollment, inputRefs)}
                  />
                ))}
              </div>
              <select className="semester-select">
                <option value="" disabled selected>Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>

            <button type="button" onClick={handleSignup}>Sign Up</button>
          </form>
        </div>

        {/* LOGIN FORM */}
        <div className="form-container sign-in">
          <form className="AuthForm">
            <h1>Sign In</h1>
            <input type="text" placeholder="User name" />
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <br />
            <p className="forgot-password" onClick={handleForgotPassword}>
              Forgot password?
            </p>
            <br />
            <div className="role-selection">
              <label className={role === "student" ? "selected" : ""}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Student
              </label>
              <label className={role === "faculty" ? "selected" : ""}>
                <input
                  type="radio"
                  name="role"
                  value="faculty"
                  checked={role === "faculty"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Faculty
              </label>
            </div>

            <button type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>

        {/* OVERLAY PANELS */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>One of us?</h1>
              <p>Welcome back! Continue learning and building with us.</p>
              <button className="hidden" onClick={() => setIsSignup(false)}>Sign In</button>
              <img src={LoginMeme} alt="student meme" className="panel-img" />
            </div>
            <div className="toggle-panel toggle-right">
              <h1>New here?</h1>
              <p>Join Secure Exam Portal and explore amazing features.</p>
              <button className="hidden" onClick={() => setIsSignup(true)}>Sign Up</button>
              <img src={SignupMeme} alt="rocket" className="panel-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}