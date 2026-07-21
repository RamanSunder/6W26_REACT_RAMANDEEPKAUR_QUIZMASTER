import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Authservices from "../../../services/Authservices";
import { toast } from "react-toastify";

export default function Header() {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function logout() {
    Authservices.logout();
    toast.success("Logged Out");
    nav("/");
  }

  useEffect(() => {
    let res = Authservices.getEmail();
    setEmail(res);
  });
  return (
    <>
      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="" className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="me-3" />
                QuizMaster
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="/home" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/categoryuser" className="nav-item nav-link">
                  Categories
                </Link>
                {/* <Link to="/questionuser" className="nav-item nav-link">
                  Quizzes
                </Link> */}

                {email ? (
                  <Link to="/" className="nav-item nav-link" onClick={logout}>
                    Logout
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="nav-item nav-link">
                      Login
                    </Link>
                    <Link to="/" className="nav-item nav-link">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}
