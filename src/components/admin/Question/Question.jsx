import { Link } from "react-router-dom"
import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { useEffect } from "react";
import Questionservices from "../../../services/Questionservices";
import Swal from "sweetalert2";
export default function Question(){
    const [Category, setCategory] = useState([]);
      const [Question, setQuestion] = useState([])
    
      async function fetchCategory() {
        let res = await Categoryservices.all();
        setCategory(res);
      }
    
      async function fetchQuestion() {
        let res = await Questionservices.all();
        setQuestion(res);
      }
    
      async function deleteQuestion(id) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await Questionservices.delete(id);
            fetchQuestion();
         
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
           }
          });
        
      }
    
      useEffect(() => {
        fetchCategory();
        fetchQuestion()
      }, []);
    return(
        <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >Questions
      </h4>
      
    </div>
  </div>
  {/* Header End */}
  {/* Blog Start */}
  <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        
        <p className="mb-0 fs-3">
          Manage quiz categories by creating, updating, and organizing topics. Categories help classify quizzes, making it easier for users to find and attempt quizzes based on their interests.
        </p>
      </div>


     
    </div>
  </div>
  {/* Blog End */}


  


      <div className="d-flex justify-content-evenly m-5">
        <h1>Add Questions</h1>
        <Link to="/admin/question/add">
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            Add Questions
          </button>
        </Link>
      </div>





<div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Question</th>
                  <th scope="col">Option1</th>
                  <th scope="col">Option2</th>
                  <th scope="col">Option3</th>
                  <th scope="col">Option4</th>
                  <th scope="col">Answer</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Question.map((Question, index) => (
                  <tr>
                    <td>
                      <p className="mb-0 mt-4">{index + 1}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Question.question}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Question.option1}</p>
                    </td>

                     <td>
                      <p className="mb-0 mt-4">{Question.option2}</p>
                    </td>

                     <td>
                      <p className="mb-0 mt-4">{Question.option3}</p>
                    </td>

                     <td>
                      <p className="mb-0 mt-4">{Question.option4}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Question.answer}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {Question.status ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {new Date(Question.createdAt).toLocaleTimeString()}
                      </p>
                    </td>
                    <td>
                      <Link to={`/admin/question/edit/${Question.id}`}>
                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                          <i className="bi bi-pencil text-danger" />
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => {
                          deleteQuestion(Question.id);

                          console.log(Question.id);
                        }}
                      >
                        <i className="bi bi-trash text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="d-flex justify-content-evenly m-5">
        <h1>Update Questions</h1>
        <Link to="/admin/question/update">
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            Update Questions
          </button>
        </Link>
      </div> */}
  
</>

    )
}