import { Link } from "react-router-dom";
import "../css/styles.css";
import Table from "../components/tableData";

function Extension() {
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
          <Link to="/form">
            <h4 className="nav-item nav-extension-disabled">
              <a className="nav-link" href="/form">
                Request extension
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
        <div className="navText">
          <h3>What is an extension?</h3>
          <p className="paragraph">
            If you're prevented from submitting an assessment on time by
            cirsumstance outside your control, you may apply in advance (at
            least one working day before the assessment deadline) for an
            extension to the due date of up to seven calendar days.
          </p>
          <p>
            You can apply for anextension for assessment with a deadline, such
            as assignment, essays and projects, but NOT for timed assessments
            such as test, exams, qyizzes or lab/practical assessment. If you're
            seeking assessment flexibility for a timed assessment, you must
            apply for special consideration.
          </p>
          <p>
            If you require an extension of greater than seven days, you must
            apply for special consideration, unless you have an Equitable
            Learning plan
          </p>
          <hr></hr>
        </div>
        <br></br>
      </div>
      <Table />
    </>
  );
}

export default Extension;
