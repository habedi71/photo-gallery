import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../context/GalleryContext";

const NotFound404 = () => {
	const { setHasMore } = useContext(GalleryContext);

	useEffect(() => {
		setHasMore(false);
	});
	return (
		<>
			<div className="notfound d-flex justify-content-center fw-bold w-100 mt-5 p-2">
				<p className="mx-auto fw-bold">404 | page not found.</p>
			</div>
		</>
	);
};

export default NotFound404;
