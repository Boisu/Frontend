import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./landing";
import Detail from "./detail";

function App() {
  return (
    <>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>M. Faiz Triputra</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
