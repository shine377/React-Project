import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Teacher() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [teacherTable, setTeacherTable] = useState();
  const [length, setLength] = useState(0);
  const [approve, setApprove] = useState(0);
  const [denied, setDenied] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const pageCount = count;
  const lastIndex = currentPage * pageCount;
  const firstIndex = lastIndex - pageCount;

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

  //Getting teachers table data
  useEffect(() => {
    fetch("  http://localhost:8000/api/v10/teacherTable")
      .then((data) => data.json())
      .then((data) => {
        data.map((obj) => {
          setTeacherTable(obj.Students);
        });
      })
      .catch((err) => console.log(err));

    //Count of status
    const statusPending = teacherTable?.filter((b) => b.Status === "pending");
    setLength(statusPending?.length);
    const statusApproved = teacherTable?.filter((b) => b.Status === "approved");
    setApprove(statusApproved?.length);
    const statusDenied = teacherTable?.filter((b) => b.Status === "denied");
    setDenied(statusDenied?.length);
    const statusCancelled = teacherTable?.filter(
      (b) => b.Status === "cancelled"
    );
    setCancelled(statusCancelled?.length);
  }, [teacherTable]);

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
      <div className="status-teachers">
        <p className="status-count">{length}</p>
        <h4 className="pending-request">Pending</h4>
        <p className="status-count">{approve} </p>
        <h4 className="approved-request">Approved</h4>
        <p className="status-count">{denied}</p>
        <h4 className="denied-request">Denied</h4>
        <p className="status-count">{cancelled}</p>
        <h4 className="cancelled-request">Cancelled</h4>
      </div>
      <div className="container-fluid">
        <h4 style={{ paddingTop: "20px" }}>Extension request</h4>
        <input
          placeholder="Search by name,assessment"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        ></input>{" "}
        <button
          onClick={() => {
            setSearch("");
          }}
        >
          Clear
        </button>
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
              {teacherTable
                ?.slice(firstIndex, lastIndex)
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.studentName
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    val.assessmentTitle
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((obj) => (
                  <>
                    <tr>
                      <td>{obj.id}</td>
                      <td>{obj.studentName}</td>
                      <td>{obj.dateSubmitted}</td>
                      <td>{obj.assessmentTitle}</td>
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
    </>
  );
}

export default Teacher;
