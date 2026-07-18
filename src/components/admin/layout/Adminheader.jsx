import { useEffect } from "react";
import { Link } from "react-router-dom";
import Authservices from "../../../services/Authservices";

export default function Adminheader() {

  
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
                <Link to="/admin" className="nav-item nav-link ">
                  Dashboard
                </Link>
                
                <Link to="/admin/manageuser" className="nav-item nav-link">
                  Manage Users
                </Link>
                <Link to="/admin/category" className="nav-item nav-link">
                  Categories
                </Link>
                <Link to="/admin/question" className="nav-item nav-link">
                Questions
                </Link>
                
                
                <Link to="/admin/result" className="nav-item nav-link">
                  Result
                </Link>
                
              </div>
              
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}
