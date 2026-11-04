
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Registerservices from "../../services/Registerservices";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [userType, setUserType] = useState("");
    const [institutionId, setInstitutionId] = useState("");

    const nav = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        let pattern = /^[6-9]{1}[0-9]{9}$/;

        if (
            !name ||
            !email ||
            !password ||
            !contact ||
            !userType ||
            !institutionId
        ) {
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

            await Registerservices.Register(payload);

            toast.success("Registered Successfully");
            nav("/login");

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

                                    <div className="row justify-content-center w-100">

                                        <div
                                            className="fadeInLeft animated col-lg-8 col-xl-7"
                                            data-animation="fadeInLeft"
                                            data-delay="1s"
                                            style={{ animationDelay: "1s" }}
                                        >

                                            {/* Register Card */}

                                            <div className="bg-secondary rounded p-5 w-100">

                                                <h1 className="text-white mb-4 text-center">
                                                    Register
                                                </h1>

                                                <form onSubmit={handleRegister}>

                                                    <div className="row g-3">

                                                        {/* Name */}

                                                        <div className="col-lg-6">
                                                            <label
                                                                htmlFor="name"
                                                                className="form-label text-white"
                                                            >
                                                                Your Name
                                                            </label>

                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder="Enter your name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>

                                                        {/* Email */}

                                                        <div className="col-lg-6">
                                                            <label
                                                                htmlFor="email"
                                                                className="form-label text-white"
                                                            >
                                                                Your Email
                                                            </label>

                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                placeholder="Enter your email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>

                                                        {/* Password */}

                                                        <div className="col-lg-6">
                                                            <label
                                                                htmlFor="password"
                                                                className="form-label text-white"
                                                            >
                                                                Password
                                                            </label>

                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="password"
                                                                placeholder="Enter your password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>

                                                        {/* Contact */}

                                                        <div className="col-lg-6">
                                                            <label
                                                                htmlFor="contact"
                                                                className="form-label text-white"
                                                            >
                                                                Contact
                                                            </label>

                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                id="contact"
                                                                placeholder="Enter your contact number"
                                                                maxLength="10"
                                                                value={contact}
                                                                onChange={(e) => setContact(e.target.value)}
                                                            />
                                                        </div>

                                                        {/* User Type */}

                                                        <div className="col-12">
                                                            <label
                                                                htmlFor="userType"
                                                                className="form-label text-white"
                                                            >
                                                                User Type
                                                            </label>

                                                            <select
                                                                className="form-select"
                                                                id="userType"
                                                                value={userType}
                                                                onChange={(e) => setUserType(e.target.value)}
                                                            >
                                                                <option value="">
                                                                    Select User Type
                                                                </option>

                                                                <option value="admin">
                                                                    Admin
                                                                </option>

                                                                <option value="student">
                                                                    Student
                                                                </option>

                                                            </select>
                                                        </div>

                                                        {/* Institution ID */}

                                                        <div className="col-12">
                                                            <label
                                                                htmlFor="institutionId"
                                                                className="form-label text-white"
                                                            >
                                                                Institution ID
                                                            </label>

                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="institutionId"
                                                                placeholder="Enter institution ID"
                                                                value={institutionId}
                                                                onChange={(e) => setInstitutionId(e.target.value)}
                                                            />
                                                        </div>

                                                        {/* Register Button */}

                                                        <div className="col-12 mt-4">

                                                            <button
                                                                type="submit"
                                                                className="btn btn-light w-100 py-3"
                                                            >
                                                                Register
                                                            </button>

                                                        </div>

                                                        {/* Login Link */}

                                                        <div className="col-12 text-center mt-3">

                                                            <p className="text-white mb-0">
                                                                Already have an account?{" "}
                                                                <Link
                                                                    to="/login"
                                                                    className="text-white fw-bold"
                                                                >
                                                                    Login
                                                                </Link>
                                                            </p>

                                                        </div>

                                                    </div>

                                                </form>

                                            </div>

                                            {/* Register Card End */}

                                        </div>

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
