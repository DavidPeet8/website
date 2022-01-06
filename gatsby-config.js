module.exports = {
	pathPrefix: "/",
	siteMetadata: {
		siteUrl: "https://website.davidpeet.md",
		title: "David Peet",
	},
	plugins: [
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "G-7YSX82SJKY",
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				excludes: [`/__generated/*`],
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.svg",
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		"gatsby-plugin-open-graph-images",
	],
};
