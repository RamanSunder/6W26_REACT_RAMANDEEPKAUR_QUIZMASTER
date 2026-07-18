import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Registerservices from "../../services/Registerservices";
export default function Register() {
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
      {/* Carousel Start */}
      <div className="header-carousel">
        <div
          id="carouselId"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="/img/red-and-white-background.jpg"
                className="img-fluid w-100"
                alt="First slide"
              />
              <div
                className="carousel-caption d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <div className="container h-100 d-flex justify-content-center align-items-center">
                  <div className="row justify-content-center ">
                    <div
                      className="fadeInLeft animated"
                      data-animation="fadeInLeft"
                      data-delay="1s"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="bg-secondary rounded p-5 w-60">
                        <h1 className="text-white mb-4">Register</h1>
                        <form onSubmit={Register}>
                          <div className="row g-3">
                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="email"
                                placeholder="Enter Your Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>

                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="text"
                                placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>

                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="text"
                                placeholder="Enter InstituitonId"
                                onChange={(e) => setInstitutionId(e.target.value)}
                              />
                            </div>

                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="number"
                                placeholder="Enter Contact"
                                onChange={(e) => setContact(e.target.value)}
                              />
                            </div>

                            <div className="col-12">
                              <select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="fs-4"
                              >
                                <option value="">Select User Type</option>
                                <option value="admin">Admin</option>
                                <option value="user">Student</option>
                              </select>
                            </div>

                            <div className="col-12">
                              <button
                                className="btn btn-light w-100 py-2"
                                type="submit"
                              >
                                Register
                              </button>
                            </div>

                            <h4 className="text-white">
                              Already have an account?
                            </h4>
                            <div className="col-12">
                              <Link to="/login">
                                <button
                                  className="btn btn-light w-100 py-2"
                                  type="button"
                                >
                                  Login
                                </button>
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="1s"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
}
