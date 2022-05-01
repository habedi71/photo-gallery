import { v4 as uuidv4 } from "uuid";
import { FiArrowUpRight } from "react-icons/fi";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";

import { concatString } from "../utils/utils";

const Gallery = ({ data }) => {
	const handleClick = url => {
		window.open(url);
	};

	return (
		<>
			{data.map(pin => {
				const {
					canonical_url: url,
					domain,
					slug,
					name,
					price,
					image_url,
				} = pin;
				return (
					<div
						key={uuidv4()}
						className="grid-item"
						onClick={() => handleClick(url)}
					>
						<LazyLoadImage
							alt={slug}
							height={"auto"}
							src={image_url}
						/>
						<button
							className="btn btn-light"
							onClick={() => handleClick(url)}
						>
							<FiArrowUpRight size={"1.1em"} />
							{concatString(domain, 10)}
						</button>
						<p className="item-name">
							{name} | {price}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default trackWindowScroll(Gallery);
