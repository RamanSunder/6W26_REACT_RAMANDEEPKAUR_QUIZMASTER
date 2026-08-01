


import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import Registerservices from "../../services/Registerservices";


export default function Manageprofile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState('')
  const [institutionId, setInstitutionId] = useState('')

  const nav = useNavigate();

  async function Register(e) {
    e.preventDefault();

    let pattern = /^[6-9]{1}[0-9]{9}$/;

    if (!name || !email || !password || !contact || !userType || !institutionId) {
      toast.error("All fields are required");
      return;
    }
    if (!pattern.test(contact)) {
      toast.error("Please enter a valid number");
      return;
    }
    try {
      let payload = {
        name: name,
        email: email,
        password: password,
        contact: contact,
        userType : userType,
        institutionId : institutionId
      };
      await Registerservices.Register(payload);
      toast.success("Registered");

    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email is already registered");
          
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;

        case "auth/weak-password":
          toast.error("Password should be at least 6 characters");
          break;

        case "auth/network-request-failed":
          toast.error("Please check your internet connection");
          break;

        default:
          toast.error(error.message);
        // console.log(error);
      }
    }
  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >My Profile
            </h4>
          </div>
        </div>



      <div className=" container vh-100 d-flex justify-content-center align-items-center col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="bg-secondary p-5 rounded">
    <h4 className="text-primary mb-4">Edit Profile</h4>
    <form>
      <div className="row g-4">
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Phone"
            />
            <label htmlFor="phone">Your password</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="project"
              placeholder="Project"
            />
            <label htmlFor="project">Your Project</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
              style={{ height: 160 }}
              defaultValue={""}
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-light w-100 py-3">Send Message</button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  );
}
