import { useEffect, useState } from "react"
import Categoryservices from "../../../services/Categoryservices"
import { Link, useNavigate, useParams } from "react-router-dom"
import {toast} from 'react-toastify'
export default function Editcategory(){

    const [Category, setCategory] = useState([])
    const [Description, setDescription] = useState([])

    const param = useParams()
    const nav = useNavigate()



    async function editCategory(e){
      e.preventDefault()
      try{
        let payload = {
          category: Category,
          description : Description,
        institutionId : localStorage.getItem("institutionId")
        }
        await Categoryservices.edit(payload, param.id)
         toast.success("Category updated")
         nav('/admin/category')
         
      }catch(err){
        toast.error("Error updating")
      }

    }


    async function getDetails(e){
      let res = await Categoryservices.single(param.id)
      if(res){
        setCategory(res.category)
        setDescription(res.description)
        
      }else{
        toast.error("Document not founded")
        console.log(error)
      }
    }
    useEffect(()=>{
      getDetails()
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
          <form onSubmit={editCategory} action="" className="">
            

            <input
              type="text"
              className="w-100 form-control border-0 py-3 mb-4"
              placeholder="Enter Category Name"
              value={Category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <input
              type="text"
              className="w-100 form-control border-0 py-3 mb-4"
              placeholder="Enter Description"
              value={Description}
              onChange={(e)=>setDescription(e.target.value)}
            />

            <button
              className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


        </>
    )
}