export default function Dashboard() {
  return (
    <>
      {/* Features Start */}
      <div className="container-fluid feature py-5 ">
        <div className="container py-5 ">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Welcome <span className="text-primary">Admin</span>
            </h1>
            <p className="mb-0 fs-3">
              Welcome back! Monitor platform performance, manage quizzes, track
              user activity, and oversee the entire Online Quiz Management
              System from one centralized dashboard.
            </p>
          </div>
          <div className="row g-4 d-flex justify-content-evenly">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-trophy fa-2x" />
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Comprehensive Quiz Management</h5>
                      <p className="mb-0">
                        Create, update, and organize quizzes with multiple
                        categories, difficulty levels, and time limits. Manage
                        all quiz content from a single dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-user fa-2x" />
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">User Management</h5>
                      <p className="mb-0">
                        View registered users, manage accounts, monitor user
                        activity, and control access to ensure a secure and
                        organized platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Real-Time Analytics</h5>
                      <p className="mb-0">
                        Track quiz attempts, average scores, pass rates, and
                        user performance through detailed reports and
                        interactive charts.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="bi bi-bar-chart fa-2x" />
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Category &amp; Question Bank</h5>
                      <p className="mb-0">
                        Maintain a centralized question bank with categorized
                        questions. Easily add, edit, delete, and reuse questions
                        across multiple quizzes.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="fa fa-question fa-2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      
      {/* Fact Counter */}
      <div className="container-fluid counter bg-secondary py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-user fa-2x" />
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    829
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total Users</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="bi bi-ui-checks-grid fa-2x " />
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    56
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total Quizzes</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="bi bi-question fa-4x" />
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    127
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total Questions</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fa fa-server fa-2x" />
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    589
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total Categories</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact Counter */}
      
    </>
  );
}
