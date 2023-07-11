import { Link } from "react-router-dom";

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
          <h4 style={{paddingTop:'20px'}}>Extension request</h4>
          <input placeholder="Search by assessment"></input>
          <button>Clear</button>
        </div>
    </>
  );
}

export default Teacher;
