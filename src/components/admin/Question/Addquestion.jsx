import { useEffect, useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Questionservices from "../../../services/Questionservices";
import { db } from "../../../firebase/firebaseConfig";

export default function Addquestion() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);


 const handleCategoryChange = (e) => {
  const id = e.target.value;

  setCategoryId(id);

  const selected = category.find((item) => item.id === id);

  setSelectedCategory(selected);

  if (selected) {
    setImage(selected.image);
  }
};

  const nav = useNavigate()
  const {id} = useParams()

  async function addQuestion(e) {
    e.preventDefault();
    try {
      let payload = {
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer,
        categoryId: categoryId,
        image: image,
        // institutionId: localStorage.getItem("instituitonId"),
      };
      console.log(payload);

      await Questionservices.add(payload);
      toast.success("Question Added");
      nav("/admin/question");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  async function fetchCategory() {
    // console.log(localStorage.getItem("institutionId"));
    let res = await Categoryservices.all();
    // console.log(res);
    setCategory(res);

     if (id) {
    setCategoryId(id);

    const selected = res.find((item) => item.id === id);

    if (selected) {
      setSelectedCategory(selected);
      setImage(selected.image);
    }
  }
  }



  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <>
        {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              Add Questions
            </h4>
          </div>
        </div>

        <div className="p-5 rounded ">
          <h4 className="text-primary mb-4 d-flex justify-content-center">
            Add Questions
          </h4>
          <form
            className="d-flex justify-content-center"
            onSubmit={addQuestion}
          >
            <div className="row g-4 col-lg-6 ">
              <div className="col-lg-12">
                <select
                  name=""
                  id=""
                  className="form-control mb-2"
                
                  value={categoryId} 
                  placeholder="Select Category"
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {category.map((c) => (
                    <option value={c.id} key={c.id}>{c.category}</option>
                  ))}
                </select>

                {/* {selectedCategory && (
                  <div className="mt-3">
                    <img
                      src={selectedCategory.image}
                      alt={selectedCategory.name}
                      width="120"
                      height="120"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <h5>{selectedCategory.name}</h5>
                  </div>
                )} */}


                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    id="question"
                    value={question}
                    placeholder="Enter Question"
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                  ></textarea>
                  <label>Question</label>
                </div>
              </div>

              <div className="mb-3">
                <label>Option 1</label>
                <input
                  type="text"
                  className="form-control"
                  value={option1}
                  onChange={(e) => setOption1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Option 2</label>
                <input
                  type="text"
                  className="form-control"
                  value={option2}
                  onChange={(e) => setOption2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Option 3</label>
                <input
                  type="text"
                  className="form-control"
                  value={option3}
                  onChange={(e) => setOption3(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Option 4</label>
                <input
                  type="text"
                  className="form-control"
                  value={option4}
                  onChange={(e) => setOption4(e.target.value)}
                />
              </div>

              <div className="col-lg-12 ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="option1"
                    value={option1}
                    checked={answer === option1}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option1">
                    {option1}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="option2"
                    value={option2}
                    checked={answer === option2}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option1">
                    {option2}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="option3"
                    value={option3}
                    checked={answer === option3}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option1">
                    {option3}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option4"
                    value={option4}
                    checked={answer === option4}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option1">
                    {option4}
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button className="btn btn-light w-100 py-3 ">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
