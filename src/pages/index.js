import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import * as CustomMarkdown from "../components/customMarkdown"
import ItemList from "../components/itemlist"
import About from "../components/about"
import Headshot from "../components/headshot"
import Modal from "../components/modal"
import GitLink from "../components/gitlink"
import PageHelmet from "../components/helmet"

import "../styling/index.sass"

const shortcodes = {
	...CustomMarkdown.Custom,
	GitLink: GitLink,
}

class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		this.regModal = this.regModal.bind(this);
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);

		this.state = {
			about: null,
			positions: [],
			projects: [],
		};

		for (let el of props.data.allMdx.nodes) {
			if (el.frontmatter.hidden) continue;
			switch (el.frontmatter.type) {
				case "about":
					this.state.about = el; break;
				case "position":
					this.state.positions.push(el); break;
				case "project":
					this.state.projects.push(el); break;
				default:
					throw Error("ERROR - could not match type.");
			}
		}
	}

	regModal(modal) {
		this.modalHandlers = { ...modal };
	}

	showModal(content) {
		this.modalHandlers.show(content);
	}

	hideModal() {
		this.modalHandlers.hide();
	}

	render() {
		return (
			<section className="page" role="button" tabIndex={-1} onClick={this.hideModal} onKeyDown={this.hideModal}>
				<PageHelmet />
				<MDXProvider components={shortcodes}>
					<div className="content">
						<div className="intro">
							<Headshot />
							<About el={this.state.about} />
						</div>

						<div id="experience" className="experience-intro">
							<h1 className="markdown">Experience</h1>
							<p className="markdown"></p>
						</div>

						<ItemList elementlist={this.state.positions} setModal={this.showModal} />

						<div id="projects" className="projects-intro">
							<h1 className="markdown">Projects</h1>
							<p className="markdown"></p>
						</div>

						<ItemList elementlist={this.state.projects} setModal={this.showModal} />
					</div>
					<div className="spacer"></div>
					<Modal register={this.regModal} />
				</MDXProvider>
			</section>
		);
	}
}

export const query = graphql`
	query WorkQuery {
		allMdx(sort: {order: DESC, fields: frontmatter___index}) {
			nodes {
				frontmatter {
					company
					title
					type
					index
					hidden
					splash
					time
				}
				body
			}
    }
	}
`

export default IndexPage
