import React from "react"

import "../styling/open-source.sass"

class OpenSource extends React.Component {
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
		let sfx = this.model.frontmatter.title.toLowerCase().replace(/\s/g, '-')
		return (
			<div id={"open-source-" + sfx} className="open-source" role="button" tabIndex={0} onClick={this.toggleModal} onKeyDown={this.toggleModal}>
				<div className={sfx}>
					<div className="open-source-splash">
						<h1 className="markdown">{this.model.frontmatter.title}</h1>
						<p className="markdown">{this.model.frontmatter.splash}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default OpenSource;
