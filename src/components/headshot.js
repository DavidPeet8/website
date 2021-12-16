import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styling/headshot.sass"

const Headshot = (props) => {
	let caption;

	switch (Math.floor((Math.random() * 3) - 0.00001)) {
		case 0:
			caption = "It works on my machine ¯\\_(ツ)_/¯"; break;
		case 1:
			caption = "I � Unicode"; break;
		case 2:
			caption = "I Google better than your average bear"; break;
		default:
			throw Error("Not all caption cases handled, or missing a break statement.");
	}

	return (
		<div className="headshot" >
			<a className="img-wrapper" href="https://github.com/DavidPeet8">
				<StaticImage src="../images/profile.webp" alt="Headshot" />
			</a>
			<em className="markdown caption">{caption}</em>
		</div>
	);
}

export default Headshot;
