import { useState, useEffect } from "react";
import details from "../json/assessmentDetails.json";

function Table() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState([]);

  const pageCount = count;
  const lastIndex = currentPage * pageCount;
  const firstIndex = lastIndex - pageCount;
  const studentData = details.filter((d) => d.role_id === "1");
  const record = formData.slice(firstIndex, lastIndex);
  const pages = Math.ceil(studentData[0].details.length / pageCount);

  useEffect(() => {
    fetch("http://localhost:8000/user/table")
      .then((data) => data.json())
      .then((data) => setFormData(data))
      .catch((err) => console.log(err));
  }, []);

  function previousPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className="container-fluid">
      <div>
        <h4>Extension request</h4>
        <input
          placeholder="Search by assessment"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        ></input>
        {console.log("search", search)}
        <button
          onClick={() => {
            setSearch("");
          }}
        >
          Clear
        </button>
      </div>
      <hr className="hr-line"></hr>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Date submitted</th>
              <th>Assessment title</th>
              <th>Extend by(days)</th>
              <th>Approved due date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {record
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((obj) => (
                <>
                  <tr>
                    <td>{obj.dateSubmitted}</td>
                    <td>{obj.assessmentTitle}</td>
                    <td>{obj.extendedBy}</td>
                    <td>{obj.approvedDueDate}</td>
                    <td>{obj.Status}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
      <div className="container-fluid">
        <div className="col-lg-10">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={previousPage}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {currentPage}
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={nextPage}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <label>Per page</label>
          <select
            className="page-count"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Table;
