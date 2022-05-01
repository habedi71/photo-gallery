import React, { useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet";
///
import NotFound from "./notfound";
import Loader from "./loader";
import GAllery from "./gallery";
import { GalleryContext } from "../context/GalleryContext";

function Home() {
	const { data, setHasMore, hasMore, loadMore } = useContext(GalleryContext);
	useEffect(() => {
		setHasMore(true);
	}, []);

	return (
		<>
			<Helmet>
				<title>React Gallery</title>
			</Helmet>

			<main>
				<section className="mx-auto">
					{data.length ? (
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
						<>{!hasMore ? <NotFound /> : <Loader />}</>
					)}
				</section>
			</main>
		</>
	);
}

export default Home;
