import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GalleryContext } from "../context/GalleryContext";
import { FiSearch } from "react-icons/fi";
const Header = () => {
	const { hasMore, data } = useContext(GalleryContext);
	const [searchString, setSearchSting] = useState("");
	const navigate = useNavigate();

	const handleChange = e => {
		setSearchSting(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		const location =
			!searchString && searchString.trim() === ""
				? process.env.REACT_APP_HOME_PATH
				: process.env.REACT_APP_HOME_PATH + "/search/" + searchString;
		navigate(location);
	};

	const handleClick = () => {
		setSearchSting("");
		navigate(process.env.REACT_APP_HOME_PATH);
	};

	return (
		<header className="position-sticky top-0 bg-light mb-5">
			<nav className="navbar navbar-expand-lg navbar-light bg-light ">
				<form
					className="w-100 form-control d-flex"
					onSubmit={handleSubmit}
				>
					<div className="input-group mb-3 w-75 mx-auto">
						<button
							className={`btn fw-bold rounded-pill mx-3 ${
								hasMore
									? "btn-secondary"
									: "btn-outline-secondary"
							}`}
							type="button"
							id="button-addon2"
							onClick={handleClick}
						>
							Home
						</button>
						<button
							onClick={handleSubmit}
							className="input-group-text rounded-end rounded-pill"
							id="basic-addon1"
						>
							<FiSearch />
						</button>
						<input
							type="search"
							className="form-control rounded-start rounded-pill"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="button-addon2"
							name="search"
							value={searchString}
							onChange={handleChange}
							disabled={!data || !data.length}
						/>
					</div>
				</form>
			</nav>
		</header>
	);
};

export default Header;
