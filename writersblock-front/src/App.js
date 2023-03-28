import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AddPlace from "./components/places/AddPlace";
import EditPlace from "./components/places/EditPlace";
import ViewPlace from "./components/places/ViewPlace";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<ViewPlace />}></Route>
        <Route path="/" element={<ViewPlace />}></Route>
        <Route path="/viewPlace" element={<ViewPlace />}></Route>
        <Route path="/addPlace" element={<AddPlace />}></Route>
        <Route path="/editPlace" element={<EditPlace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
