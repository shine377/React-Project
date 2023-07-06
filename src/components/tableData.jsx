import { Container } from "@material-ui/core";
import data from "../json/data.json"


function Table() {
  return (
    <Container className="sm">
    <div>
      <table>
        <thead>
          <tr>
            <td>Date submitted</td>
            <td>Assessment title</td>
            <td>Extend by(days)</td>
            <td>Approved due date</td>
            <td>Status</td>
            <td></td>
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
                <td>{obj.Detail}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
  )
}

export default Table;
