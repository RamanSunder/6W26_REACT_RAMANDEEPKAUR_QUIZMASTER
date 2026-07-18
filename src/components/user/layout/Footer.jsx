export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">About QuizMaster</h4>
                  <p className="mb-3">
                    QuizMaster is an online learning platform designed to help students improve their knowledge through interactive quizzes. Practice by category, track your progress, and compete on the leaderboard—all in one place.
                  </p>
                </div>
                <div className="position-relative">
                  <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Home
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> About Us
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Quiz Categories
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Leaderboard
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Results
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Terms &amp;
                  Conditions
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Platform Features</h4>
                <div className="mb-3">
                  <i className="text-white mb-0 "/>Multiple Quiz categories
                </div>
                <div className="mb-3">
                  <i className="text-white mb-0"/>Timed Quiz Sessions
                </div>
                <div className="mb-3">
                  <i className="text-white mb-0"/>Instant Results
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2" />
                  Quiz
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a
                className="border-bottom text-white"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a
                className="border-bottom text-white"
                href="https://themewagon.com"
              >
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
}
