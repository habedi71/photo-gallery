import React, { useEffect, useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
///
import NotFound from "./notfound";
import Loader from "./loader";
import GAllery from "./gallery";
import { GalleryContext } from "../context/GalleryContext";

function Home() {
	const { data, setHasMore, hasMore, loadMore } = useContext(GalleryContext);
	const [error, setError] = useState(null);
	useEffect(() => {
		setHasMore(true);
	}, []);

	return (
		<main>
			<section className="mx-auto">
				{data && data.length ? (
					<InfiniteScroll
						pageStart={0}
						loadMore={loadMore}
						hasMore={hasMore}
						effect="blur"
						loader={<Loader key={uuidv4()} />}
						useWindow={true}
						className="grid-container bt-3"
					>
						<GAllery data={data} />
					</InfiniteScroll>
				) : (
					<>{!hasMore && <NotFound />}</>
				)}
			</section>
		</main>
	);
}

export default Home;
