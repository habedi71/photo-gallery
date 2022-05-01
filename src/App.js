import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import NotFound404 from "./components/notfound404";
import SearchResult from "./components/SearchResult";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/search/:term" element={<SearchResult />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
