import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h3>Secure Exam Portal</h3>
          <p>
            A smart and secure platform for conducting online examinations
            with real-time monitoring and seamless user experience.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Dashboard</li>
            <li>Upcoming Exams</li>
            <li>Results</li>
            <li>Profile</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: 220170116050@vgecg.ac.in</p>
          <p>Phone: +91 93277 56064</p>

          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Secure Exam Portal. All rights reserved.
      </div>
    </footer>
  );
}
