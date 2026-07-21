import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { useEffect } from "react";
import Questionservices from "../../../services/Questionservices";
export default function Categoryuser() {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);
  const [categoryQuestions, setCategoryQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const nav = useNavigate()
  async function fetchCategory() {
    let res = await Categoryservices.all();
    setCategory(res);
  }
  async function fetchQuestion() {
    let res = await Questionservices.all();
    setQuestion(res);
  }

  function openCategory(categoryId, category) {
    console.log(categoryId, category);

    const filtered = question.filter((q) => q.categoryId === categoryId);
    console.log("All Questions:", question);
    console.log(filtered);

    setSelectedCategory(category);
    setCategoryQuestions(filtered);
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
            View Categories
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

      <div className="row m-5">
        {category.map((category) => (
          <div className="col-md-4 mb-4" key={category.id}>
            <div className="card shadow-sm h-100">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.category}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div
                className="card-body"
                style={{ cursor: "pointer" }}
                onClick={() =>
                   nav(`/questionuser/${category.id}`)
                  }
              >
                <div className="card-body text-center">
                  <h5>{category.category}</h5>
                  <p>{category.description}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      
{selectedCategory && (
  <>
    <h2 className="mt-5">{selectedCategory}</h2>

    {categoryQuestions.length > 0 ? (
      categoryQuestions.map((q, index) => (
        <div key={q.id} className="card mb-3 p-3">


          <h5>
            {index + 1}. {q.question}
          </h5>

          <div className="form-check">
            <input
              type="radio"
              name={`q-${q.id}`}
              className="form-check-input"
            />
            <label>{q.option1}</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={`q-${q.id}`}
              className="form-check-input"
            />
            <label>{q.option2}</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={`q-${q.id}`}
              className="form-check-input"
            />
            <label>{q.option3}</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name={`q-${q.id}`}
              className="form-check-input"
            />
            <label>{q.option4}</label>
          </div>

        </div>
      ))
    ) : (
      <p>No questions available.</p>
    )}
  </>
)}
    </>
  );
}
