import { useEffect, useState } from "react";
import Authservices from "../../../services/Authservices";
import Resultservices from "../../../services/Resultservices";

export default function Myresult() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    const user = Authservices.getData();

    const res = await Resultservices.all();

    const myResults = res.filter(
      (item) => item.userId === user.id // change to user.uid if needed
    );

    setResults(myResults);
  }

  return (
<>
    <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >My Result
            </h4>
          </div>
        </div>


    <div className="container py-5">
      <h2 className="mb-4">My Quiz Results</h2>

      {results.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Total</th>
              <th>Correct</th>
              <th>Wrong</th>
              <th>Score</th>
              <th>Percentage</th>

            </tr>
          </thead>

          <tbody>
            {results.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td>{item.totalQuestion}</td>
                <td>{item.correctAnswer}</td>
                <td>{item.wrongAnswer}</td>
                <td>{item.score}/{item.totalQuestion}</td>
                <td>{item.percentage}</td>

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5>No quiz attempted yet.</h5>
      )}
    </div>
    </>
  );
}