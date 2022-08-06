import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./landing";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
