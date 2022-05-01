import React from "react";
import { concatString } from "../utils/utils";

const NotFound = ({ term }) => {
	return (
		<>
			<div className="notfound d-flex justify-content-center fw-bold w-100 mt-5 p-2">
				<p className="mx-auto">
					Sorry, we couldn't find any items for{" "}
					<span style={{ color: "#f00" }}>
						{concatString(term, 14)}
					</span>
				</p>
			</div>
		</>
	);
};

export default NotFound;
