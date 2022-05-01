import React, { createContext, useState, useEffect, useMemo } from "react";
import { fetchData } from "../utils/utils";

export const GalleryContext = createContext("");

const GalleryProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(20);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		(async () => {
			const dataList = await fetchData(offset);
			setData(dataList);
		})();
	}, []);

	const handleShowList = () => {
		setHasMore(() => true);
	};

	const loadMore = async () => {
		const dataList = await fetchData(offset + 20);
		setData([...data, ...dataList]);
		setOffset(offset + 20);
	};

	const value = useMemo(
		() => ({
			data,
			setData,
			offset,
			setOffset,
			hasMore,
			setHasMore,
			handleShowList,
			loadMore,
		}),
		[data, offset, hasMore]
	);

	return (
		<GalleryContext.Provider value={value}>
			{children}
		</GalleryContext.Provider>
	);
};

export default GalleryProvider;
