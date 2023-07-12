import data from "../json/data.json";
import { Link } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";

function Form() {
  const [select, setSelect] = useState("-");
  const [checked, isChecked] = useState(true);
  const [count, setCount] = useState(0);

  const dueDate = (value) => {
    const date = data.find((jsons) => jsons.title === value);
    console.log(date);
  };

  const handleChange = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <>
      <div className="App">
        <p className="nav-content">Assessment Extension</p>
        <div className="tab-content">
          <Link to="/Student">
            <h4 className="nav-item nav-request-disabled">
              <a className="nav-link" href="/Student">
                Extension request
              </a>
            </h4>
          </Link>
          <Link to="/form" style={{ backgroundColor: "white" }}>
            <h4 className="nav-item nav-request">
              <a className="nav-link nav-request" href="/form">
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
        <p>
          ParagraphParagraphs are the group of sentences combined together,
          about a certain topic. It is a very important form of writing as we
          write almost everything in paragraphs, be it an answer, essay, story,
          emails, etc. We can say that a well-structured paragraph is the
          essence of good writing. The purposes of the paragraph are to give
          information, to explain something, to tell a story, and to convince
          someone that our idea is right.
        </p>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <label>Course code</label>
              <input
                className="inputBox"
                placeholder="DTR202-2023-JULA"
                disabled
              ></input>
            </div>
            <div className="col-lg-6">
              <label>Course title</label>
              <input
                className="inputBox"
                placeholder="MANUAL TEST Assessment Extension & PLP"
                disabled
              ></input>
            </div>
          </div>
          <div className="row form-content">
            <div className="col-lg-6">
              <label>Assessment* (required)</label>
              <br></br>
              <select
                className="selectOption"
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
              >
                <option value={select} disabled="disabled" selected="selected">
                  Select eligible assessment
                </option>
                {console.log("slected option", select)}
                {data.map((obj) => (
                  <>
                    <option>{obj.title}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="col-lg-6">
              <label>Due date</label>
              <input
                className="inputBox"
                placeholder={dueDate(select)}
                disabled
              ></input>
            </div>
          </div>
          <div className="row form-content">
            <div className="col-lg-6">
              <label>How many additional days do you need?* (required)</label>
              <select className="selectOption">
                <option value="" disabled="disabled" selected="selected">
                  Select days
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label>Proposed due date</label>
              <input className="inputBox" placeholder="-" disabled></input>
            </div>
          </div>
          <div className="form-content">
            <label>Reason for extension* (required)</label>
            <p>Maximum 3000 characters</p>
            <textarea
              className="text-area"
              placeholder="Enter your reason for extension"
              maxLength={3000}
              onChange={handleChange}
            ></textarea>
            <h5>Character count: {count}/3000</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h4>Supporting documents (optional)</h4>
            <hr></hr>
            <p className="p-tag">
              Paragraphs are blocks of textual content that segment out a larger
              piece of writing—stories, novels, articles, creative writing, or
              professional writing portions—making it less complicated to read
              and understand. Excellent paragraphs are an available writing
              skill for plenty of types of literature, and proper writers can
              substantially beautify the clarity of their news, essays, or
              fiction writing whilst constructing nicely. Structure of a
              Paragraph A paragraph has three major parts- Topic sentence
              Supporting sentences Concluding sentence<br></br> 1. Topic
              Sentence A topic sentence is a precise statement that reflects the
              main idea of the paragraph. It should be carefully written as it
              will show the reader what you are going to talk about. Words
              chosen for this should not be cluttered and ambiguous as readers
              will decide to read further based on this. It is not necessary to
              write the topic sentence at the beginning of the paragraph. It can
              be put anywhere, as long as it reflects the main topic. For
              instance, if you mention that you are going to talk about the
              advantages of using the hand sanitizer, then in supporting
              sentence you should only talk about advantages, not the features
              or anything else.<br></br> 2. Supporting Sentences Supporting
              sentences explain the topic sentence in detail. They expand the
              main topic and develops the main idea into the explanation. They
              explain the main topic using examples, facts, quotes, etc. They
              have to be related to the topic sentence. There can be two types
              of Supporting sentences, First, The major supporting sentence;
              this sentence directly explains the main idea with some new fact
              or new idea. Second, a minor support sentence helps the major
              supporting sentence develop the controlling idea.<br></br> 3.
              Conclusion Sentence A good concluding sentence brings a paragraph
              to a polished end. It may give a summary of the main topic, a
              concluding sentence also gives a final take on the topic and
              leaves the reader with complete information. A good conclusion can
              either be just reiterating the topic again or it could be
              concluded with a few main points which were not exclusively
              mentioned in the paragraph.{" "}
            </p>
          </div>
          <div className="col-lg-6">
            <h4>Applicant declaration* (require)</h4>
            <hr></hr>
            <p className="p-tag">
              Whether you're writing a small paragraph or a big paragraph, the
              basic laws of structure should apply to both. While the framework
              for fiction is less strict than for nonfiction, the material or
              tale you create must logically or sequentially tie to the next
              paragraph. These aspects aid in the coherency of your body
              paragraphs, linking them together to form a unified whole around a
              topic or to establish a narrative arc.<br></br> 1. Think Before
              You Write Thinking before writing helps establish a structure and
              understand what you are going to answer in the paragraph. How can
              you be going to answer and what points should be provided to
              support your hypothesis? What facts and quotes can support your
              idea.<br></br> 2. Open Your Notebook Write the answers to the
              above questions in a manner that includes all the important
              points. Just write in pointers to remember the gist of the matter.{" "}
              <br></br>3. Choose the Main Idea Out of all the information you
              have found, you will have to decide the main idea of the paragraph
              which you would like to operate.<br></br> 4. Use a Dictionary and
              Thesaurus Use a dictionary and thesaurus to add additional words
              to express your ideas.<br></br> 5. Make Your Topic Sentence's
              First Sentence. The opening line of your first paragraph sets the
              tone for what your audience will learn as they continue reading.
              Even in fiction, a paragraph's introduction either creates or
              extends an idea or scenario from the previous paragraph. Every
              successful paragraph starts with a central topic that the rest of
              the paragraph aims to support, regardless of what style or genre
              you're writing for.<br></br> 6. The Intermediate Sentences Should
              be Used to Provide Support. Follow-up information to your main
              sentence or prior paragraph is included in these sentences. These
              phrases are where you persuade your reader to believe or imagine
              what you believe, and offer them all they need to see your point
              of view.
            </p>
            <hr></hr>
            <Checkbox onClick={() => isChecked(false)}></Checkbox>
            <label>
              I agree to the applicant declaration agreement statement above.(*)
            </label>
          </div>
        </div>
        <div>
          <Link to="/Student">
            <button className="submit-button" disabled={checked}>
              Submit extension request
            </button>
          </Link>
          <br></br>
          <p>
            Note: You must accept the declaration and fill in the required
            fields to submit an extension request
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
