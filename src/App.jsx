
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";


function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
 
  );
}

export default App;
