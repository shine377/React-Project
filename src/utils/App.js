import Extension from "../components/assessmentExtension";
import Form from "../components/extensionForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roles from "../components/roles";
import Teacher from "../components/teacherView";

function App() {
  const handleLinkClick = () => {
    window.location.reload();
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Roles />}></Route>
          <Route
            path="/Student"
            element={<Extension onClick={handleLinkClick} />}
          ></Route>
          <Route path="/Teacher" element={<Teacher />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
