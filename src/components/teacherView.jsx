import { Link } from "react-router-dom";
import data from "../json/teacherData.json";

function Teacher() {
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
        <input placeholder="Search by assessment"></input>
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
              {data.map((obj) => (
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
                  <a class="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <label>Per page</label>
            <select className="page-count">
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
