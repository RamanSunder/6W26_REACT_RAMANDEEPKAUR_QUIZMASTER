import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"

export default function Edituser() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Contact, setContact]= useState('')

  const param = useParams();
  const nav = useNavigate();

  async function getAllDetails(e) {
    let res = await Userservices.single(param.id);
    if (res) {
      setEmail(res.email);
      setPassword(res.password);
      setName(res.name);
      setContact(res.contact)
    } else {
      toast.error("Document not founded");
    }
  }

  async function editUser(e) {
    e.preventDefault();
    try {
      let payload = {
        email: Email,
        password: Password,
        name: Name,
        contact: Contact
      };
      await Userservices.edit(payload, param.id);
      toast.success("Successfully updated");
      nav("/admin/manageuser");
    } catch (error) {
      toast.error("Error updating");
      console.log(error)
    }
  }

  useEffect(() => {
    getAllDetails();
  }, []);
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Edit User
          </h4>
        </div>
      </div>
      <div className="d-flex justify-content-center m-4">
        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-secondary p-5 rounded">
            <h4 className="text-primary mb-4">Edit User</h4>
            <form onSubmit={editUser}>
              <div className="row g-4">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      //   placeholder="Student's Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      //   placeholder="Enter Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      //   placeholder="Student's Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
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
                    <button className="btn btn-light w-100 py-3">Update</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
