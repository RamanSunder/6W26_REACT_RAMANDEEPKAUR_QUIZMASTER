import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Questionservices from "../../../services/Questionservices";
import Categoryservices from "../../../services/Categoryservices";
import Resultmodel from "../../../Model/Resultmodel";
import Resultservices from "../../../services/Resultservices";
import Authservices from "../../../services/Authservices";



export default function Questionuser() {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);
  // const [categoryQuestions, setCategoryQuestions] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const handleOptionChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const { categoryId } = useParams();

  async function fetchQuestion() {
    let res = await Questionservices.all();
    console.log(res);
    setQuestion(res);
  }

  async function fetchQuestions() {
    const res = await Questionservices.all();

    const filtered = res.filter((q) => q.categoryId === categoryId);

    setQuestion(filtered);
  }
console.log("Submit button clicked");
  async function submit() {
    let correct = 0;
    let wrong = 0;

    question.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    setCorrectAnswer(correct);
    setWrongAnswer(wrong);
    setSubmitted(true);

    Swal.fire({
      title: "Quiz Submitted!",
      html: `
      <h5>Total Questions : ${question.length}</h5>
      <h5 style="color:green">Correct : ${correct}</h5>
      <h5 style="color:red">Wrong : ${wrong}</h5>
      <h4>Score : ${correct}/${question.length}</h4>
    `,
      icon: "success",
    });

    // Save result here later
console.log("categoryId:", categoryId);
console.log("category array:", category);
console.log("First category:", category[0]);

const selectedCategory = category.find(
  (item) => item.id === categoryId
);

const categoryName = selectedCategory?.category || "";
    const user = Authservices.getData();
console.log("Current User:", user);
console.log("selectedcategory",selectedCategory);


const result = new Resultmodel();

result.userId = user.id;      // Use user.uid if that's what your Authservices stores
result.userName = user.name;
result.categoryId = categoryId;
result.totalQuestion = question.length;
result.correctAnswer = correct;
result.wrongAnswer = wrong;
result.score = correct;
result.category = categoryName;
result.percentage = (correct / question.length) * 100;


try {
  // console.log("Submit function started");

  const user = Authservices.getData();
  // console.log("Current User:", user);

  // console.log("Result object:", result);

  await Resultservices.add(result);

  // console.log("Result saved successfully");
} catch (error) {
  console.error("Save Error:", error);
}
  }

   async function fetchCategory() {
      let res = await Categoryservices.all();
      setCategory(res);
    }
  

  useEffect(() => {
    fetchQuestions();
    fetchCategory();
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
          >
            Attempt Quizzes
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
                    className="form-check-input"
                    name={q.id}
                    value={q.option1}
                    checked={selectedAnswers[q.id] === q.option1}
                    onChange={() => handleOptionChange(q.id, q.option1)}
                    disabled={submitted}
                  />
                  <label className="form-check-label">{q.option1}</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={q.id}
                    value={q.option2}
                    checked={selectedAnswers[q.id] === q.option2}
                    onChange={() => handleOptionChange(q.id, q.option2)}
                    disabled={submitted}
                  />
                  <label className="form-check-label">{q.option2}</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={q.id}
                    value={q.option3}
                    checked={selectedAnswers[q.id] === q.option3}
                    onChange={() => handleOptionChange(q.id, q.option3)}
                    disabled={submitted}
                  />
                  <label className="form-check-label">{q.option3}</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={q.id}
                    value={q.option4}
                    checked={selectedAnswers[q.id] === q.option4}
                    onChange={() => handleOptionChange(q.id, q.option4)}
                    disabled={submitted}
                  />
                  <label className="form-check-label">{q.option4}</label>
                </div>

                {submitted && (
                  <>
                    <hr />

                    <p>
                      <strong>Your Answer : </strong>
                      {selectedAnswers[q.id] || "Not Answered"}
                    </p>

                    <p className="text-success">
                      <strong>Correct Answer : </strong>
                      {q.answer}
                    </p>

                    {selectedAnswers[q.id] === q.answer ? (
                      <span className="badge bg-success">Correct</span>
                    ) : (
                      <span className="badge bg-danger">Wrong</span>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="text-center mt-4">
  {!submitted && (
    <button
      className="btn btn-primary btn-lg"
      disabled={Object.keys(selectedAnswers).length !== question.length}
      onClick={submit}
    >
      Submit Quiz
    </button>
  )}

  {submitted && (
    <div className="alert alert-success mt-4 text-center">
      <h4>Quiz Result</h4>

      <h5>Total Questions: {question.length}</h5>

      <h5 className="text-success">
        Correct: {correctAnswer}
      </h5>

      <h5 className="text-danger">
        Wrong: {wrongAnswer}
      </h5>

      <h4>
        Score: {correctAnswer}/{question.length}
      </h4>
    </div>
  )}
</div>
          </>
        ) : (
          <p>No questions found.</p>
        )}
      </div>
    </>
  );
}
