import Extension from "../../components/assessmentExtension";
// import Table from "../../components/tableData";
import Form from '../../components/extensionForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Extension/>}></Route>
      {/* <Route path="/table" element={<Table/>}></Route> */}
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
