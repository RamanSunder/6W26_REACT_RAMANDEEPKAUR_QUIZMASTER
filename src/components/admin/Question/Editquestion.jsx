import { useEffect, useState } from "react"
import Categoryservices from "../../../services/Categoryservices"
import { Link, useNavigate, useParams } from "react-router-dom"
import {toast} from 'react-toastify'
import Questionservices from "../../../services/Questionservices";
export default function Editquestion(){

    // const [Category, setCategory] = useState([])
    // const [Description, setDescription] = useState([])

    

    const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

    const param = useParams()
    const nav = useNavigate()


    


    async function editQuestion(e){
      e.preventDefault()
      try{
        let payload = {
          question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer,
        categoryId: categoryId,
        institutionId: localStorage.getItem("instituitonId"),
        }
        await Questionservices.edit(payload, param.id)
         toast.success("Question updated")
         nav('/admin/question')
         
      }catch(err){
        toast.error("Error updating")
      }

    }


    async function getDetails(e){
      let res = await Questionservices.single(param.id)
      if(res){
        setCategoryId(res.categoryId)
        setQuestion(res.question)
        setOption1(res.option1)
        setOption2(res.option2)
        setOption3(res.option3)
        setOption4(res.option4)
        setAnswer(res.answer)
      }else{
        toast.error("Not Founded")
        console.log(error)
      }
    }


    async function fetchCategory() {
        // console.log(localStorage.getItem("institutionId"));
        let res = await Categoryservices.all();
        // console.log(res);
        setCategory(res);
      }
    useEffect(()=>{
      getDetails();
      fetchCategory()

    },[])



    
    return(
        <>
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              Edit Categories
            </h4>
          </div>
        </div>

         <div className="d-flex justify-content-center mt-2">
        <div className="col-lg-7">
          <form onSubmit={editQuestion} action="" className="">
            

             <div className="row g-4 col-lg-6 ">
              <div className="col-lg-12">
                <select
                  name=""
                  id=""
                  className="form-control m-3"
                  placeholder="Select Category"
                  value={category}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="" selected disabled>
                    Select Category
                  </option>
                  {category.map((c) => (
                    <option value={c.id}>{c.category}</option>
                  ))}
                </select>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="question"
                    value={question}
                    placeholder="Enter Question"
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                  />
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

                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option2"
                    value={option2}
                    checked={selectedOption === option2}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option2">
                    {option2}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option3"
                    value={option3}
                    checked={selectedOption === option3}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option3">
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
                    checked={selectedOption === option4}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option4">
                    {option4}
                  </label>
                </div> */}
                
              </div>
              

              {/* <div className="col-lg-12 ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="option1"
                    value={option1}
                    checked={selectedOption === option1}
                    onChange={(e) => setSelectedOption(e.target.value)}
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
                    checked={selectedOption === option2}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option2">
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
                    checked={selectedOption === option3}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option3">
                    {option3}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="option4"
                    value={option4}
                    checked={selectedOption === option4}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="option4">
                    {option4}
                  </label>
                </div>
                <select
                  name=""
                  id=""
                  className="form-control "
                  onChange={(e) => setAnswer(e.target.value)}
                >
                  <option value="{option1}">Option 1</option>
                  <option value="{option2}">Option 2</option>
                  <option value="{option3}">Option 3</option>
                  <option value="{option4}">Option 4</option>
                </select>
              </div> */}


              

              <div className="col-12">
                <button className="btn btn-light w-100 py-3 ">Submit</button>
              </div>
            </div>



           
          </form>
        </div>
      </div>


        </>
    )
}