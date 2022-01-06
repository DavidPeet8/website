const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images")
const path = require("path")

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	const openGraphImage = createOpenGraphImage(createPage, {
		path: "/images/opengraph.png",
		component: path.resolve("src/pages/index.js"),
		context: {
			description: "a image created with gatsby-plugin-open-graph-images",
		},
	});
};
