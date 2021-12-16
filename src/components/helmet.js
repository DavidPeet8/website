import React from "react"
import { Helmet } from "react-helmet"

class PageHelmet extends React.Component {
	render() {
		return (
			<Helmet htmlAttributes={{ lang: 'en', }}>
				<meta charSet="utf-8" />
				<meta http-equiv="content-language" content="en-us" />
				<meta name="description" content="Personal website for David Peet. Check out my software development projects!" />
				<meta name="author" content="David Peet"></meta>
				<title>David Peet</title>
			</Helmet>
		);
	}
}

export default PageHelmet;
