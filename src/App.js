import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DataTable from "./screens/DataTable";
import Login from "./screens/Login";
import Main from "./screens/Main";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
