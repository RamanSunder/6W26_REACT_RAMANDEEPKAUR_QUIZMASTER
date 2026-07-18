import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Addcategory() {
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  // const [InstituitonId, setInstituionId] = useState("")

  const nav = useNavigate()

  async function addCategory(e) {
    e.preventDefault();
    try {
      let payload = {
        category: Category,
        description: Description,
        institutionId : localStorage.getItem("institutionId")
      };
      await Categoryservices.add(payload);
      // console.log("Payload", payload)
      toast.success("Category Added");
      nav('/admin/category')
    } catch (error) {
      toast.error(error.message);
      // console.log(error)
    }
  }
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
              Add Categories
            </h4>
          </div>
        </div>

        <div className="p-5 rounded ">
          <h4 className="text-primary mb-4 d-flex justify-content-center">
            Add Category
          </h4>
          <form className="d-flex justify-content-center" onSubmit={addCategory}>
            <div className="row g-4 col-lg-6 ">
              <div className="col-lg-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Enter Category"
                    onChange={(e) => {setCategory(e.target.value);}}
                  />
                  <label>Category</label>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter Description"
                    onChange={(e)=>{setDescription(e.target.value)}}
                  />
                  <label>Description</label>
                </div>
              </div>

              {/* <div className="col-lg-12 ">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="institutionId"
                    placeholder="Enter Institution Id"
                    onChange={(e)=>{setInstituionId(e.target.value)}}
                  />
                  <label>Institution Id</label>
                </div>
              </div> */}

              <div className="col-12">
                <button className="btn btn-light w-100 py-3">
                  Add Category
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
