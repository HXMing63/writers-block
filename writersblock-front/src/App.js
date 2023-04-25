import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ViewPlace from "./components/places/ViewPlace";
import ViewHome from "./components/home/ViewHome";
import AddStorySetting from "./components/storySetting/AddStorySetting";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<ViewHome />}></Route>
        <Route path="/" element={<ViewHome />}></Route>
        <Route path="/viewPlace" element={<ViewPlace />}></Route>
        <Route path="/addStorySetting" element={<AddStorySetting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
