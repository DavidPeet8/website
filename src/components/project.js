import React from "react"

import "../styling/project.sass"

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.model = props.model;
		this.id = this.model.frontmatter.index;
		this.toggleModal = this.toggleModal.bind(this);
		this.setModal = props.setModal;
	}

	toggleModal(event) {
		event.stopPropagation();
		this.setModal(this.model.body);
	}

	render() {
		return (
			<div className={"project " + this.model.frontmatter.title.toLowerCase().replace(/\s/g, '-')} role="button" tabIndex={0} onClick={this.toggleModal} onKeyDown={this.toggleModal}>
				<div className="project-splash">
					<h1 className="markdown">{this.model.frontmatter.title}</h1>
					<p className="markdown">{this.model.frontmatter.splash}</p>
				</div>
			</div>
		);
	}
}

export default Project;
