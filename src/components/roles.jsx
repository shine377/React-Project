import { Link } from "react-router-dom";


function Roles() {

    return(
        <div className="container">
            <h2>Select the role</h2>
            <Link to="/Student">Student</Link>
            <Link to="/Teacher">Teacher</Link>
        </div>
    )
}

export default Roles;
