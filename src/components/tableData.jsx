import data from "../json/data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

function Table() {
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
            {record.map((obj) => (
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
  );
}

export default Table;
