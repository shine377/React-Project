import { Link } from "react-router-dom";

function Roles() {
  return (
    <div className="container">
      <center>
        <div className="roles">
          <h2 style={{fontSize:"65px"}}>Select the role</h2>
          <Link to="/Student" className="student-role">Student</Link>
          <br></br>
          <Link to="/Teacher" className="teacher-role">Teacher</Link>
        </div>
      </center>
    </div>
  );
}

export default Roles;
