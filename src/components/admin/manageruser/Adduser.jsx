import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {toast } from "react-toastify"

export default function Adduser() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [Contact, setContact] = useState("")

    

    const nav = useNavigate()

    async function addUser(e){
        e.preventDefault()
        try{
              let payload ={
                name: Name,
                email: Email,
                password: Password,
                contact : Contact,
              }
              await Userservices.add(payload)
              toast.success("User added")
              nav('/admin/manageuser')
            }catch(error){
              toast.error("Error")
              console.log(error)
            }
    }
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Add User
          </h4>
        </div>
      </div>
      <div className="d-flex justify-content-center m-4">
        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-secondary p-5 rounded">
            <h4 className="text-primary mb-4">Add User</h4>
            <form onSubmit = {addUser}>
              <div className="row g-4">
              
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Student's Email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="email"> Student's Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label htmlFor="Password">Password</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Student's Name"
                      onChange={(e)=>setName(e.target.value)}
                    />
                    <label htmlFor="Name">Student's Name</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="Student's Contact No."
                      onChange={(e)=>setContact(e.target.value)}
                    />
                    <label htmlFor="Name">Student's Contact No.</label>
                  </div>
                </div>

               

                

                <div className="col-12">
                  <button className="btn btn-light w-100 py-3">
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
