import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../CSS/WelcomePage.css";

export default function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/AuthPage"); // change route if needed
    }, 1300);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <motion.div
        className="splash-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="portal-name">Secure Exam Portal</h1>
        <p className="portal-slogan">
          Integrity. Intelligence. Assessment.
        </p>
      </motion.div>
    </div>
  );
}
