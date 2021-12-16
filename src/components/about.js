import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "../styling/about.sass"

const About = ({ el }) => {
	return (
		<div className="about">
			<MDXRenderer>{el.body}</MDXRenderer>
		</div>
	);
}

export default About;
