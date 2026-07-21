import { Link } from "react-router-dom";
import { useState } from "react";
import Categoryservices from "../../../services/Categoryservices";
import { useEffect } from "react";
import Swal from "sweetalert2";
export default function Category() {
  const [Category, setCategory] = useState([]);

  async function fetchCategory() {
    let res = await Categoryservices.all();
    setCategory(res);
  }

  async function deleteCategory(id) {
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
        await Categoryservices.delete(id);
        fetchCategory();

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Manage Categories
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
              Manage quiz categories by creating, updating, and organizing
              topics. Categories help classify quizzes, making it easier for
              users to find and attempt quizzes based on their interests.
            </p>
          </div>
        </div>
      </div>
      {/* Blog End */}
     

      <div className="d-flex justify-content-evenly ">
        <h1>Add Categories</h1>
        <Link to="/admin/category/add">
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            Add Categories
          </button>
        </Link>
      </div>

      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">InstitutionId</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Category.map((Category, index) => (
                  <tr>
                    <td>
                      <p className="mb-0 mt-4">{index + 1}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{Category.category}</p>
                    </td>

                    <td>
                      <p className="mb-0 mt-4">{Category.description}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{Category.institutionId}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {Category.status ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        {new Date(Category.createdAt).toLocaleTimeString()}
                      </p>
                    </td>
                    <td>
                      <Link to={`/admin/category/edit/${Category.id}`}>
                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                          <i className="bi bi-pencil text-danger" />
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => {
                          deleteCategory(Category.id);

                          console.log(Category.id);
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
      </div> */}

      <div className="row m-5">
        {Category.map((category) => (
          <div className="col-md-4 mb-4" key={category.id}>
            <div className="card shadow-sm h-100">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.category}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{category.category}</h5>

                <p>{category.description}</p>

                <span
                  className={`badge ${category.status ? "bg-success" : "bg-danger"}`}
                >
                  {category.status ? "Active" : "Inactive"}
                </span>

                <div className="mt-3">
                  <Link to={`/admin/category/edit/${category.id}`}>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="bi bi-pencil text-danger" />
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-md rounded-circle bg-light border mt-4"
                    onClick={() => {
                      deleteCategory(category.id);

                      console.log(category.id);
                    }}
                  >
                    <i className="bi bi-trash text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
