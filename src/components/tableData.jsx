import data from "../json/data.json";
import { Link } from "react-router-dom";

function Table() {
  return (
    <div className="container-fluid">
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
            {data.map((obj) => (
              <>
                <tr>
                  <td>{obj.Date}</td>
                  <td>{obj.title}</td>
                  <td>{obj.Extend}</td>
                  <td>{obj.Approved}</td>
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
  );
}

export default Table;
