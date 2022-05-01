import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./notfound";
import Gallery from "./gallery";
import { GalleryContext } from "../context/GalleryContext";

function Search() {
	const { data, setHasMore } = useContext(GalleryContext);
	const { term } = useParams();
	const [result, setResult] = useState();

	useEffect(() => {
		setHasMore(false);
		setResult(
			data.filter(item =>
				item.description.toLowerCase().includes(term.toLowerCase())
			)
		);
	}, [term]);

	return (
		<main>
			<section className="mx-auto mb-5">
				{result && result.length ? (
					<div className="grid-container bt-3">
						<Gallery data={result} />
					</div>
				) : (
					<>{<NotFound term={term} />}</>
				)}
			</section>
		</main>
	);
}

export default Search;
