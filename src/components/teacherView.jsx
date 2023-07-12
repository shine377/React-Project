import { Link } from "react-router-dom";
import data from "../json/teacherData.json";
import { useState } from "react";

function Teacher() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = count;
  const lastIndex = currentPage * pageCount;
  const firstIndex = lastIndex - pageCount;
  const record = data.slice(firstIndex, lastIndex);
  const pages = Math.ceil(data.length / pageCount);

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
    <>
      <div className="App">
        <p className="nav-content">Assessment Extension</p>
        <div className="tab-content">
          <Link to="/Student" style={{ backgroundColor: "white" }}>
            <h4 className="nav-item nav-extension">
              <a className="nav-link" href="/Student">
                Extension request
              </a>
            </h4>
          </Link>
          <Link to="/">
            <h4 className="nav-item role-change">
              <a className="nav-link" href="/">
                Role
              </a>
            </h4>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <h3>Overview</h3>
        <p>
          This form must be completed as submitted no later than one business
          day before the official due date of yout assessment. if your
          application for extension is received less than one business day from
          the due date, after the due date, or your require more than seven days
          then you must apply for special consideration within five working days
          after the assessment dur date. However, if you have an equitable
          assessment arrangement (EAA) which provides for negotiation of
          submission dates with relevant academic/teaching staff, extension of
          more than seven days may be considered. Support service are also
          available via RMIT University Library.
        </p>
        <hr></hr>
      </div>
      <div>
        <ol>
          <li className="pending-request">Pending</li>
          <li className="approved-request">Approved</li>
          <li className="denied-request">Denied</li>
          <li className="cancelled-request">Cancelled</li>
        </ol>
      </div>
      <div className="container-fluid">
        <h4 style={{ paddingTop: "20px" }}>Extension request</h4>
        <input
          placeholder="Search byname,assessment"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>{" "}
        <button>Clear</button>
      </div>

      <div className="container-fluid">
        <hr className="hr-line"></hr>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Date submitted</th>
                <th>Assement title</th>
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
                    val.Student_Name.toLowerCase().includes(
                      search.toLowerCase()
                    ) ||
                    val.Assessment_title.toLowerCase().includes(
                      search.toLowerCase()
                    )
                  ) {
                    return val;
                  }
                })
                .map((obj) => (
                  <>
                    <tr>
                      <td>{obj.Student_ID}</td>
                      <td>{obj.Student_Name}</td>
                      <td>{obj.Date_submitted}</td>
                      <td>{obj.Assessment_title}</td>
                      <td>{obj.Status}</td>
                      <Link>
                        <td>{obj.Detail}</td>
                      </Link>
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
                    {pages}
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
    </>
  );
}

export default Teacher;
