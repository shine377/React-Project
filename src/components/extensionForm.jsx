import { Container } from "@material-ui/core";
import data from "../json/data.json";

function Form() {
  return (
    <Container className="sm">
      <div>
        <h3>Assessment extension form</h3>
        <p>
          This form must be completed as submitted no later than one business
          day before the official due date of yout assessment. if your
          application for extension is received less than one business day from
          the due date, after the due date, or your require more than seven days
          then you must apply for special consideration within five working days
          after the assessment dur date.
        </p>
        <p>
          However, if you have an equitable assessment arrangement (EAA) which
          provides for negotiation of submission dates with relevant
          academic/teaching staff, extension of more than seven days may be
          considered. Support service are also available via RMIT University
          Library.
        </p>
        <hr></hr>
        <div>
          <label>Course code</label>
          <input placeholder="DTR202-2023-JULA" disabled></input>

          <label>Course title</label>
          <input
            placeholder="MANUAL TEST Assessment Extension & PLP"
            disabled
          ></input>
        </div>
        <div>
          <label>Assessment* (required)</label>
          <select>
            {/* <option disabled>Select eligible assessment</option> */}

            {data.map((obj) => (
              <>
                <option>{obj.title}</option>
              </>
            ))}
          </select>
                <label>Due date</label>
                <input placeholder="-" disabled></input>

        </div>
        <div>
            <label>How many additional days do you need?* (required)</label>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>

            <label>Proposed due date</label>
            <input placeholder="-" disabled></input>
        </div>
        <div>
            <label>Reason for extension* (required)</label>
            <textarea placeholder="Enter your reason for extension" maxLength={3000}></textarea>
        </div>
      </div>
    </Container>
  );
}

export default Form;
