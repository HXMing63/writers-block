import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ViewPlace from "./components/places/ViewPlace";
import ViewHome from "./components/home/ViewHome";
import ViewStorySetting from "./components/storySetting/ViewStorySetting";
import ViewStoryChar from "./components/storyChar/ViewStoryChar";
import ViewChapter from "./components/chapter/ViewChapter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<ViewHome />}></Route>
        <Route path="/" element={<ViewHome />}></Route>
        <Route path="/viewChapter" element={<ViewChapter />}></Route>
        <Route path="/viewStoryChar" element={<ViewStoryChar />}></Route>
        <Route path="/viewPlace" element={<ViewPlace />}></Route>
        <Route path="/viewStorySetting" element={<ViewStorySetting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
