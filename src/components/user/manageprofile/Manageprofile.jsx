
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, updateEmail } from "firebase/auth";
import { db } from "../../../firebase/firebaseConfig";
import Authservices from "../../../services/Authservices";

export default function Manageprofile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState("");
  const [institutionId, setInstitutionId] = useState("");

  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user's profile
  useEffect(() => {
    async function fetchProfile() {
      try {
        let user = Authservices.getData();

        if (!user || !user.id) {
          toast.error("Please login first");
          return;
        }

        setUid(user.id);

        let docRef = doc(db, "Register", user.id);
        let snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          let data = snapshot.data();

          setName(data.name || "");
          setEmail(data.email || "");
          setContact(data.contact || "");
          setUserType(data.userType || "");
          setInstitutionId(data.institutionId || "");
        } else {
          toast.error("Profile not found");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  // Update profile
  async function updateProfile(e) {
    e.preventDefault();

    let pattern = /^[6-9]{1}[0-9]{9}$/;

    if (!name || !email || !contact) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!pattern.test(contact)) {
      toast.error("Please enter a valid contact number");
      return;
    }

    try {
      let docRef = doc(db, "Register", uid);

      // Update Firebase Authentication email if changed
      let auth = getAuth();

      if (auth.currentUser && auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
      }

      // Update Firestore document
      await updateDoc(docRef, {
        name: name,
        email: email,
        contact: contact,
      });

      // Update localStorage data
      let oldData = Authservices.getData();

      Authservices.setData({
        ...oldData,
        name: name,
        email: email,
        contact: contact,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log(error);

      if (error.code === "auth/requires-recent-login") {
        toast.error("Please logout and login again before changing email.");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else {
        toast.error(error.message);
      }
    }
  }

  if (loading) {
    return <h4 className="text-center mt-5">Loading Profile...</h4>;
  }

  return (
    <>
      {/* Page Heading */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">
            My Profile
          </h4>
        </div>
      </div>

      {/* Profile Section */}
      <div
        className="profile-section"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="/img/red-and-white-background.jpg"
          alt="Profile Background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Edit Profile Form */}
        <div
          className="bg-secondary rounded container d-flex justify-content-center align-items-center w-50"
          style={{
            position: "relative",
            minHeight: "100vh",
            padding: "40px 15px",
          }}
        >
          <form onSubmit={updateProfile} className="w-100">
            <h4
              className="mb-4"
              style={{
                color: "red",
                fontSize: "28px",
                fontWeight: "400",
              }}
            >
              Edit Profile
            </h4>

            <div className="row g-3">

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
                    required
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
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>

              {/* Contact */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    placeholder="Your Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  <label htmlFor="contact">Your Contact</label>
                </div>
              </div>

              {/* User Type */}
              <div className="col-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="userType"
                    value={userType}
                    readOnly
                  />
                  <label htmlFor="userType">User Type</label>
                </div>
              </div>

              {/* Institution ID */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="institutionId"
                    value={institutionId}
                    readOnly
                  />
                  <label htmlFor="institutionId">Institution ID</label>
                </div>
              </div>

              {/* Update Button */}
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-light w-100 py-3"
                  style={{
                    color: "red",
                    fontWeight: "500",
                  }}
                >
                  Update Profile
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
