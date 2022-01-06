import React from "react"
import { Helmet } from "react-helmet"

class PageHelmet extends React.Component {
	render() {
		return (
			<Helmet htmlAttributes={{ lang: 'en', }}>
				<meta charSet="utf-8" />
				<meta http-equiv="content-language" content="en-us" />
				<meta name="description" content="Hi, I'm David - I'm a software engineer and this is my website! Come check out my development projects!" />
				<meta name="author" content="David Peet"></meta>
				<meta property="og:image" content="../images/opengraph.png" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://website.davidpeet.me/" />
				<meta property="og:title" content="David Peet" />
				<meta property="og:description" content="Hi, I'm David - I'm a software engineer and this is my website! Come check out my development projects!" />
				<title>David Peet</title>
			</Helmet>
		);
	}
}

export default PageHelmet;
