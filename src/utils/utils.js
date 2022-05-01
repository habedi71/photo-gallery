import _ from "lodash";
export const fetchData = async offset => {
	try {
		const response = await fetch(
			"http://xoosha.com/ws/1/test.php?offset=" + offset
		);
		return await response.json();
	} catch (error) {
		return { error };
	}
};

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

export const concatString = (str = "", limit) => {
	return str.length < 14 ? str : str.slice(0, limit).concat("...");
};

export const searchTags = list => {
	let tags = list.map(item => item.split(/[,.\s]/));
	tags = tags
		.map(x => x)
		.reduce((acc, curr) => {
			acc[curr] = (acc[curr] || 0) + 1;
			return acc;
		}, {});

	_.sortBy(tags, [
		function (o) {
			return o.user;
		},
	]);
};
