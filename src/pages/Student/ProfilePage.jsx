import "../../CSS/Student/ProfilePage.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome, FaUserEdit, FaSignOutAlt, FaTrash } from "react-icons/fa";

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        // 🔐 Clear auth data
        localStorage.clear();

        Swal.fire({
          icon: "success",
          title: "Logged out",
          text: "You have been logged out successfully",
          timer: 1500,
          showConfirmButton: false,
        });

        // 🚀 Redirect
        setTimeout(() => {
          navigate("/AuthPage");
        }, 1500);
      }
    });
  };


  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Delete Account?",
      text: "This action is irreversible!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {

        // 🔥 API call goes here
        // await deleteAccountAPI();

        Swal.fire({
          icon: "success",
          title: "Account Deleted",
          text: "Your account has been permanently removed",
        });

        setTimeout(() => {
          // Redirect after delete
          navigate("/AuthPage");
        }, 2000);
      }
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="profile-navbar">
        <div className="nav-left">ExamPortal</div>
        <h2>Profile Page</h2>
        <div className="nav-right">
          <FaHome className="nav-icon" onClick={() => navigate("/StudentDashboard")} />
        </div>
      </nav>

      {/* PAGE */}
      <div className="profile-page">

        {/* PROFILE CARD */}
        <div className="profile-card">
          <div className="profile-left">
            <div className="profile-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
            </div>
          </div>

          <div className="profile-right">
            <h2>Smit Pipalva</h2>

            <div className="profile-info">
              <p><strong>Email:</strong> smit@gmail.com</p>
              <p><strong>Batch:</strong> 2022 - 2025</p>
              <p><strong>Mobile:</strong> +91 98765 43210</p>
              <p><strong>Department:</strong> IT</p>
              <p><strong>Enrollment No:</strong> IT150</p>
            </div>

            <div className="profile-actions">
              <button className="btn update" data-bs-toggle="modal" data-bs-target="#updateProfileModal">
                <FaUserEdit /> Update
              </button>
              <button className="btn logout" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
              <button className="btn delete" onClick={handleDeleteAccount}>
                <FaTrash /> Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="profile-lower">
          <div className="info-box">
            <h3>Recent Activity</h3>
            <p>✔ DSA Mid Exam Completed</p>
            <p>✔ Web Development Quiz Attempted</p>
            <p>✔ Profile Updated Recently</p>
          </div>

          <div className="info-box">
            <h3>Performance Overview</h3>
            <p>Total Exams: 12</p>
            <p>Passed: 10</p>
            <p>Best Rank: 5</p>
          </div>
        </div>
      </div>
      <Footer />

      {/* Update the information modal */}
      <div
        className="modal fade"
        id="updateProfileModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Update Profile Information</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter department"
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button type="button" className="btn btn-primary">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
