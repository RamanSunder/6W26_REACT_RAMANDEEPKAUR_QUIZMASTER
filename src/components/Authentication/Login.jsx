import { useState } from "react";
import { toast } from "react-toastify";
import {Link, useNavigate } from "react-router-dom";
import Registerservices from "../../services/Registerservices";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  async function Login(e) {
    e.preventDefault();

    try {
      let payload = {
        email: email,
        password: password,
      };
      const res = await Registerservices.Login(payload);
      console.log("Loging response",res)
      toast.success("Logged in");

      if(res.userType == "admin"){
        nav('/admin')
      }else{
        nav('/')
      }
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("Invalid email or password");
          console.log(error)
          break;

        case "auth/user-not-found":
          toast.error("User not found");
          break;

        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;

        case "auth/too-many-requests":
          toast.error("Please try again later");
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
                      <div className="bg-secondary rounded p-5">
                        <h1 className="text-white mb-4">Login</h1>
                        <form onSubmit={Login}>
                          <div className="row g-3">
                            <div className="col-12">
                              <input
                                className="w-100 fs-4"
                                type="email"
                                placeholder="Enter Your Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="col-12 ">
                              <input
                                className="w-100 fs-4"
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>

                            {/* <div className="mb-3">
                              <h4 className="text-white">Register As</h4>

                              <select
                                className="form-control"
                                name=""
                                id=""
                                onChange={(e) => setRole(e.target.value)}
                              >
                                <option value="">Select</option>

                                <option value="admin">Principal</option>
                                <option value="student">Student</option>
                              </select>
                            </div> */}

                            <div className="col-12">
                              <button
                                className="btn btn-light w-100 py-2"
                                type="submit"
                              >
                                Login
                              </button>
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
