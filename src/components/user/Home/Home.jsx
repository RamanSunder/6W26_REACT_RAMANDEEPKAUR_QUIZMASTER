export default function Home() {
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
              <span className="text-primary">Welcome</span>
            </h1>
            <p className="mb-0">
             Welcome! Explore quizzes, test your knowledge, monitor your progress, and improve your skills through an interactive online quiz platform.
            </p>
          </div>
          <div className="row g-4 d-flex justify-content-evenly">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-server fa-2x" />
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Explore Quizzes</h5>
                      <p className="mb-0">
                        Browse quizzes from multiple categories such as Programming, Web Development, Science, English, Mathematics. Choose topics that match your interests and skill level.
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
                      <h5 className="mb-3">User Profile</h5>
                      <p className="mb-0">
                        Manage your profile, update personal information, view your quiz history, and track your achievements from one convenient dashboard.
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
                      <h5 className="mb-3">Track your performance</h5>
                      <p className="mb-0">
                        Monitor your quiz attempts, scores, accuracy, and overall progress with detailed reports and easy-to-understand performance charts.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="bi bi-award fa-2x" />
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Practice &amp; Learn</h5>
                      <p className="mb-0">
                        Attempt quizzes anytime, receive instant results, review correct answers, and strengthen your knowledge through regular practice.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="bi bi-bullseye fa-2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* About Start */}
      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">
                    About <span className="text-primary">Quiz</span>
                  </h1>
                  <p className="mb-0">
                    Quiz is an online quiz management platform designed to
                    simplify quiz creation, participation, and performance
                    tracking. It provides an engaging learning experience for
                    students while offering administrators powerful tools to
                    manage quizzes, users, categories, and results efficiently.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src="img/about-icon-1.png"
                          className="img-fluid w-50 h-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">
                        To make learning interactive, accessible, and enjoyable
                        by providing a modern online quiz platform that
                        encourages continuous learning and self-assessment.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src="img/about-icon-2.png"
                          className="img-fluid h-50 w-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Mision</h5>
                      <p className="mb-0">
                        To deliver a secure, user-friendly, and feature-rich
                        quiz management system that helps educators assess
                        knowledge and enables students to improve through
                        instant feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4">
                  Our platform combines technology with education to create an
                  efficient assessment environment. Administrators can easily
                  manage quizzes and questions, while users can participate in
                  quizzes, view results instantly, and monitor their learning
                  progress.
                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h5 className="text-light mb-0">
                        1000+ Questions Available
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1" />{" "}
                        Easy User Registration & Login
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1" /> A
                        Multiple Quiz Categories
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1" />{" "}
                        Instant Results & Score Analysis
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-check-circle text-primary me-1" />{" "}
                        Secure Admin Management
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            {/* <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img
                    src="img/about-img.jpg"
                    className="img-fluid rounded h-100 w-100"
                    alt=""
                  />
                </div>
                <div className="img-2">
                  <img
                    src="img/about-img-1.jpg"
                    className="img-fluid rounded w-100"
                    alt=""
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* About End */}
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
      {/* Services Start */}
      

      <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-5 text-capitalize mt-5">
              <span className="text-primary">Categories</span>
            </h1>
            
          </div>

      

      <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
      </div>


      <div className="row g-4">
        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="blog-item">
            <div className="blog-img">
              <img 
                src="/img/programming.jpg"
                className="img-fluidrounded-top w-100"
                 style={{ height: "250px", objectFit: "cover" }}
                alt="Image"
              />
            </div>
            <div className="blog-content rounded-bottom p-4">
              <div className="blog-comment my-3">
                
                
              </div>
              <a href="#" className="h4 d-block mb-3">
                Programming
              </a>
              <p className="mb-3">
                Test your coding knowledge across multiple programming languages.C, C++, Java, Python, JavaScript, etc.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-lg-4 wow " data-wow-delay="0.3s">
          <div className="blog-item">
            <div className="blog-img ">
              <img
                src="/img/eng.png"
                className="img-fluid rounded-top w-100"
                 style={{ height: "250px", objectFit: "cover" }}
                alt="Image"
              />
            </div>
            <div className="blog-content rounded-bottom p-4">
              <div className="blog-comment my-3">
                
               
              </div>
              <a href="#" className="h4 d-block mb-3">
                English
              </a>
              <p className="mb-3">
                Grammar, vocabulary, comprehension, and communication skills.
              </p>
              
            </div>
          </div>
        </div>


        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="blog-item">
            <div className="blog-img">
              <img
                src="/img/science.jpeg"
                className="img-fluid rounded-top w-100"
                 style={{ height: "250px", objectFit: "cover" }}
                alt="Image"
              />
            </div>
            <div className="blog-content rounded-bottom p-4">
              <div className="blog-comment my-3">
                
               
              </div>
              <a href="#" className="h4 d-block mb-3">
                Science
              </a>
              <p className="mb-3">
                Physics, Chemistry, Biology, and General Science questions.
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="blog-item ">
            <div className="blog-img">
              <img
                src="/img/web.jpg"
                className="img-fluid rounded-top w-100"
                 style={{ height: "250px", objectFit: "cover" }}
                alt="Image"
              />
            </div>
            <div className="blog-content rounded-bottom p-4">
              <div className="blog-comment my-3">
                
               
              </div>
              <a href="#" className="h4 d-block mb-3">
                Web Development
              </a>
              <p className="mb-3">
                Quizzes on HTML, CSS, JavaScript, React, and modern web technologies.HTML, CSS, Bootstrap, React, Node.js
              </p>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


      {/* Services End */}
      
    </>
  );
}