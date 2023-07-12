import { Link } from "react-router-dom";

function Roles() {

  return (
    <div className="container">
      <center>
        <div className="roles">
          <h2 style={{ fontSize: "65px" }}>Select the role</h2>
          <Link to="/Student">
            <button
              className="student-role"
              id="student-view"
            >
              Student
            </button>
          </Link>
          <br></br>
          <Link to="/Teacher">
            <button
              className="teacher-role"
              id="teacher-view"
            >
              Teacher
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Roles;
