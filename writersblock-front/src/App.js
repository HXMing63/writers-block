import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ViewPlace from "./components/places/ViewPlace";
import ViewHome from "./components/home/ViewHome";
import ViewStorySetting from "./components/storySetting/ViewStorySetting";
import ViewStoryChar from "./components/storyChar/ViewStoryChar";
import ViewChapter from "./components/chapter/ViewChapter";
import ViewBook from "./components/book/ViewBook";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="mt-20">
				<Routes>
					<Route index element={<ViewHome />}></Route>
					<Route path="/" element={<ViewHome />}></Route>
					<Route path="/viewBook" element={<ViewBook />}></Route>
					<Route path="/viewChapter/:param" element={<ViewChapter />}></Route>
					<Route path="/viewStoryChar" element={<ViewStoryChar />}></Route>
					<Route path="/viewPlace" element={<ViewPlace />}></Route>
					<Route path="/viewStorySetting" element={<ViewStorySetting />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
