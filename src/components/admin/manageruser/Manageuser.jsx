import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Registerservices from "../../../services/Registerservices";
export default function Manageuser(){
    const [Category, setCategory] = useState([]);
      const [Register, setRegister] = useState([])
      const [User, setUser] = useState([])
          async function fetchUser() {
          let res = await Registerservices.all();
          setUser(res);
        }
      
        useEffect(()=>{
          fetchUser()
      
        },[])
    
    
      async function deleteUser(id) {
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
            await Registerservices.delete(id);
            fetchUser();
         
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
           }
          });
        
      }
    
      useEffect(() => {
        fetchUser();
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
          Manage user enables the administrator to view a list of all registered admin accounts in the system. It displays important details such as the admin's name, email address, contact number, and account status. This module helps in monitoring administrator accounts, verifying their information, and managing access to the system efficiently.
        </p>
      </div>


     
    </div>
  </div>
  {/* Blog End */}


  


      <div className="d-flex justify-content-evenly m-5">
        <h1>Add Users</h1>
        <Link to="/admin/manageuser/add">
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            Add Users
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
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  {/* <th scope="col">Institution Id</th> */}
                  <th scope="col">Status</th>

                  <th scope="col">Created At</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Register.map((Register, index) => (
                  <tr>
                    <td>
                      <p className="mb-0 mt-4">{index + 1}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Register.name}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Register.email}</p>
                    </td>

                     <td>
                      <p className="mb-0 mt-4">{Register.contact}</p>
                    </td>

                     {/* <td>
                      <p className="mb-0 mt-4">{User.institutionId}</p>
                    </td> */}

                     
                    <td>
                      <p className="mb-0 mt-4">
                        {Register.status ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {new Date(Register.createdAt).toLocaleTimeString()}
                      </p>
                    </td>
                    <td>
                      <Link to={`/admin/manageuser/edit/${Register.id}`}>
                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                          <i className="bi bi-pencil text-danger" />
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => {
                          deleteUser(Register.id);

                          console.log(Register.id);
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

      
  
</>

    )
}