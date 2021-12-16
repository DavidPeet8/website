import React from "react"

import "../styling/workplace.sass"

class Workplace extends React.Component {
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
			<div className="company" role="button" tabIndex={0} onClick={this.toggleModal} onKeyDown={this.toggleModal}>
				<div className={this.model.frontmatter.company.toLowerCase().replace(/\s/g, '-')}>
					<div className="position-splash">
						<h1 className="markdown">{this.model.frontmatter.title}</h1>
						<p className="markdown">{this.model.frontmatter.splash}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Workplace;
