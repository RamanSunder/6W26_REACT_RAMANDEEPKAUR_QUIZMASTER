import { Link } from "react-router-dom";
import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { useEffect } from "react";
import Questionservices from "../../../services/Questionservices";
import Swal from "sweetalert2";
export default function Question() {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);

  async function fetchCategory() {
    let res = await Categoryservices.all();
    console.log(res);
    setCategory(res);
  }

  async function fetchQuestion() {
    let res = await Questionservices.all();
    console.log(res);
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
    fetchQuestion();
  }, []);
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
           Manage Questions
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

      {/* Category Cards */}
      <div className="container">
        <div className="row">
          {category.map((c) => {
            const categoryQuestions = question.filter(
              (q) => q.categoryId === c.id,
            );

            return (
              <div className="col-lg-6 mb-4" key={c.id}>
                <div className="card shadow h-100">
                  {/* Card Header */}
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">{c.category}</h4>

                    {/* <span className="badge bg-primary">
                      {categoryQuestions.length} Questions
                    </span> */}
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    {categoryQuestions.length > 0 ? (
                      categoryQuestions.map((q, index) => (
                        <div
                          key={q.id}
                        
                          className="d-flex justify-content-between align-items-center border-bottom py-3"
                        >
                          <div>
                            <strong>{index + 1}.</strong> {q.question}
                          </div>

                          <div >
                            <Link to={`/admin/question/edit/${q.id}`}>
                              <button className="btn btn-sm btn-warning m-1">
                                <i className="bi bi-pencil"></i>
                              </button>
                            </Link>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => deleteQuestion(q.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">
                        No questions available in this category.
                      </p>
                    )}

                    {/* <div className="row m-5">
        {Question.map((ques) =>{

    const category = categories.find(
      c => c.id === ques.categoryId
    );

    return (
          <div className="col-md-4 mb-4" key={ques.id}>
            <div className="card shadow-sm h-100">
              <img
                src={ques.image}
                className="card-img-top"
                alt={ques.category}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{ques.category}</h5> */}

                    {/* <p>{ques.description}</p> */}

                    {/* <span
                  className={`badge ${category.status ? "bg-success" : "bg-danger"}`}
                >
                  {category.status ? "Active" : "Inactive"}
                </span> */}

                    {/* <div className="mt-3">
                  <Link to={`/admin/question/edit/${c.id}`}>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="bi bi-pencil text-danger" />
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-md rounded-circle bg-light border mt-4"
                    onClick={() => {
                      deleteQuestion(c.id);

                      console.log(c.id);
                    }}
                  >
                    <i className="bi bi-trash text-danger" />
                  </button>
                </div> */}

                    <div className="mt-3">
                      <Link to={`/admin/question/add/${c.id}`}>
                        <button className="btn btn-sm btn-warning me-2">
                          <i> Add Question </i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
