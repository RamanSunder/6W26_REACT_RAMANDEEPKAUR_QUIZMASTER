import { useEffect, useState } from "react"
import {Link } from "react-router-dom"
import Categoryservices from "../../../services/Categoryservices"
export default function Categoryuser(){
  const [Category, setCategory] = useState([])
  
  async function fetchCategory(){
    let res = await Categoryservices.all()
    setCategory(res)
  }
  
  useEffect(()=>{
    fetchCategory()
  })
    
    return(
        <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >Categories
      </h4>
      
    </div>
  </div>
  {/* Header End */}
  {/* Blog Start */}
  {/* <div className="container-fluid blog py-5">
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
              <Link href="to" className="">
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
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
              <Link href="to" className="">
                <i className="fa fa-arrow-right" />
              </Link>
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
              <Link href="to" className="">
                <i className="fa fa-arrow-right" />
              </Link>
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
              <Link href="to" className="">
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div> */}


   <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Category</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {Category.map((Category, index) => (
                  <tr>
                    <td>
                      <p className="mb-0 mt-4">{index + 1}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{Category.category}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Category.topic}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {Category.status ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {new Date(Category.createdAt).toLocaleTimeString()}
                      </p>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  {/* Blog End */}
  
</>

    )
}