import { Container } from "@material-ui/core";

function Extension() {
  return (
    <>
      <Container className="sm">
        <div className="App">
          <ul className="nav justify-content-center d-flex">
          <p>Assessment Extension</p>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Extension request
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Request extension
              </a>
            </li>
          </ul>
        </div>

        <div className="navText">
          <h3>What is an extension?</h3>
          <p className="paragraph">
            If you're prevented from submitting an assessment on time by
            cirsumstance outside your control, you may apply in advance (at
            least one <br></br>working day before the assessment deadline) for
            an extension to the due date of up to seven calendar days.
          </p>
          <p>
            You can apply for anextension for assessment with a deadline, such
            as assignment, essays and projects, but NOT for timed assessments
            <br></br>such as test, exams, qyizzes or lab/practical assessment.
            If you're seeking assessment flexibility for a timed assessment, you
            must apply for special consideration.
          </p>
          <p>
            If you require an extension of greater than seven days, you must
            apply for special consideration, unless you have an Equitable
            Learning plan
          </p>
          <hr></hr>
        </div>
        <div>
          <h4>Extension request</h4>
          <input placeholder="Search by assessment"></input>
          <button>Clear</button>
        </div>
        <br></br>
      </Container>
    </>
  );
}

export default Extension;
