import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import NotFound404 from "./components/notfound404";
import SearchResult from "./components/searchresult";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route
					path="/photo-gallery/search/:term"
					element={<SearchResult />}
				/>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/photo-gallery" element={<Home />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
