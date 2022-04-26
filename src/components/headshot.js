import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styling/headshot.sass"

const captions = [
	"It works on my machine ¯\\_(ツ)_/¯",
	"I � Unicode",
	"I Google better than your average bear",
	"Code goes brrrrr",
]

const Headshot = (props) => {
	const index = Math.floor((Math.random() * captions.length))
	const caption = captions[index]

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
