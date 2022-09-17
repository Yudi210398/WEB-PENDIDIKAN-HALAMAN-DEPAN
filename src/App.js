import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HalamanDepan from "./components/halamanDepan/HalamanDepan";
import Navbarss from "./components/navbar/Navbarss";

function App() {
  let route = (
    <Fragment>
      <Route path="/profile" element={<HalamanDepan />} />
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Fragment>
  );

  return (
    <Fragment>
      <Navbarss />
      <Routes>{route}</Routes>
    </Fragment>
  );
}

export default App;
