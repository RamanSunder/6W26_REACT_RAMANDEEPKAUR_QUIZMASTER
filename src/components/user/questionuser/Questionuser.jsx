import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { useEffect } from "react";
import Questionservices from "../../../services/Questionservices";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
export default function Questionuser() {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);
  const [categoryQuestions, setCategoryQuestions] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

const { categoryId } = useParams();


  async function fetchQuestion() {
    let res = await Questionservices.all();
    console.log(res);
    setQuestion(res);
  }

async function fetchQuestions() {
    const res = await Questionservices.all();

    const filtered = res.filter(
        q => q.categoryId === categoryId
    );

    setQuestion(filtered);
}

async function submit(){
  toast.success("Quiz Submitted")
}



useEffect(() => {
    fetchQuestions();
}, []);






//   console.log("Selected Category:", selectedCategory);
// console.log("Category Questions:", categoryQuestions);
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >Attempt Quizzes
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
              Manage quiz categories by creating, updating, and organizing
              topics. Categories help classify quizzes, making it easier for
              users to find and attempt quizzes based on their interests.
            </p>
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* <div className="container py-5">
  {question.length > 0 ? (
    <>
    {question.map((q, index) => (
      <div key={q.id} className="card mb-3 p-3">
        <h5>{index + 1}. {q.question}</h5>

        <div className="form-check">
          <input type="radio" name={q.id} />
          <label>{q.option1}</label>
        </div>

        <div className="form-check">
          <input type="radio" name={q.id} />
          <label>{q.option2}</label>
        </div>

        <div className="form-check">
          <input type="radio" name={q.id} />
          <label>{q.option3}</label>
        </div>

        <div className="form-check">
          <input type="radio" name={q.id} />
          <label>{q.option4}</label>
        </div>}

        
      </div>
     
              </>
    )
    
  )
  
  )
   : (
    <p>No questions found.</p>
  )}

  
</div> */}

<div className="container py-5">

  {question.length > 0 ? (
    <>
      {question.map((q, index) => (
        <div key={q.id} className="card mb-4 p-4">
          <h5>
            {index + 1}. {q.question}
          </h5>

          <div className="form-check">
            <input
              type="radio"
              name={q.id}
              value={q.option1}
              className="form-check-input"
            />
            <label className="form-check-label">
              {q.option1}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={q.id}
              value={q.option2}
              className="form-check-input"
            />
            <label className="form-check-label">
              {q.option2}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={q.id}
              value={q.option3}
              className="form-check-input"
            />
            <label className="form-check-label">
              {q.option3}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={q.id}
              value={q.option4}
              className="form-check-input"
            />
            <label className="form-check-label">
              {q.option4}
            </label>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={submit}
        >
          Submit Quiz
        </button>
      </div>
    </>
  ) : (
    <p>No questions found.</p>
  )}

</div>

     

 


    </>
  );
}
