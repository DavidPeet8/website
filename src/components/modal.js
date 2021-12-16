import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../utils/fontawesome"
import "../styling/modal.sass"

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			content: null,
		}

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.clickhandler = this.clickhandler.bind(this);

		props.register({
			show: this.show,
			hide: this.hide,
		});
	}

	clickhandler(e) {
		e.stopPropagation();
	}

	show(content) {
		this.setState({ show: true, content: content });
	}

	hide() {
		this.setState({ show: false });
	}

	render() {
		if (!this.state.show) return (<></>);
		return (
			<div className="modal" role="button" tabIndex={0} onClick={this.clickhandler} onKeyDown={this.clickhandler}>
				<div className="close" role="button" tabIndex={0} onClick={this.hide} onKeyDown={this.hide}>
					<FontAwesomeIcon icon="times" />
				</div>
				<MDXRenderer>{this.state.content}</MDXRenderer>
			</div>
		);
	}
}

export default Modal;
