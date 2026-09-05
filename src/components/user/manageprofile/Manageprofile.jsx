import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import Registerservices from "../../services/Registerservices";

export default function Manageprofile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState("");
  const [institutionId, setInstitutionId] = useState("");

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
        userType: userType,
        institutionId: institutionId,
      };

      // await Registerservices.Register(payload);
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
      }
    }
  }

  return (
    <>
      {/* Page Heading */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: 900 }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            My Profile
          </h4>
        </div>
      </div>

      {/* Image + Form Section */}
      <div
        className="profile-section"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="/img/red-and-white-background.jpg"
          alt="Profile Background"
          style={{
            position: "absolute",
            // top: 0,
            // left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Edit Profile Form */}
        <div
          className="bg-secondary rounded container d-flex justify-content-center align-items-center w-50"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // top: "50%",
            // right: "6%",
            // transform: "translateY(-50%)",
            // width: "360px",
            // maxWidth: "90%",
            // zIndex: 2,
          }}
        >
          <form >
          <h4
            className="mb-4 "
            style={{
              color: "red",
              fontSize: "28px",
              fontWeight: "400",
            }}
          >
            Edit Profile
          </h4>

          
            <div className="row g-3 w-70">

              {/* Email */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>

              {/* Name */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>

              {/* Password */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Your Password</label>
                </div>
              </div>

              {/* Project */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="project"
                    placeholder="Your Project"
                  />
                  <label htmlFor="project">Your Project</label>
                </div>
              </div>

              {/* Subject */}
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

              {/* Message */}
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: "160px" }}
                  ></textarea>

                  <label htmlFor="message">Message</label>
                </div>
              </div>

              {/* Button */}
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-light w-100 py-3"
                  style={{
                    color: "red",
                    fontWeight: "500",
                  }}
                >
                  Send Message
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}