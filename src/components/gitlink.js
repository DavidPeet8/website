import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styling/gitlink.sass"

class GitLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = { url: props.url };
	}

	render() {
		return (
			<a className="github-link" href={this.state.url}>
				<FontAwesomeIcon icon={["fab", "github-square"]} />
				<span className="github-link-text">Github</span>
			</a>
		);
	}
}

export default GitLink;
