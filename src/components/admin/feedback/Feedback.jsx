export default function Feedback(){
    return(
        <><>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Feedback
      </h4>
      
    </div>
  </div>
  {/* Header End */}
  {/* Testimonial Start */}
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="display-5 text-capitalize mb-3">
          Our Clients<span className="text-primary"> Reviews</span>
        </h1>
        <p className="mb-0 fs-3">
          View and manage feedback submitted by users. Monitor suggestions, complaints, and reviews to improve the overall quality and user experience of the quiz platform.
        </p>
      </div>
      <div
        className="testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="testimonial-item">
          
          <div className="testimonial-inner p-4">
            <div className="ms-4">
              <h4>Person Name</h4>
              <p>Attempted Quiz</p>
              
            </div>
          </div>
          <div className="border-top rounded-bottom p-4">
            <p className="mb-0">
              feedback from user
            </p>
          </div>
        </div>

       
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>


        </>
    )
}