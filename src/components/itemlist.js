import React from "react"
import { HashRouter as Router, Route } from "react-router-dom";

import Workplace from "./workplace"
import Project from "./project"
import OpenSource from "./open-source"

import "../styling/itemlist.sass"

// FIXME: Maybe add the hash router here?

class ItemList extends React.Component {
	constructor(props) {
		super(props);
		this.setModal = props.setModal;
		this.elementlist = props.elementlist;
	}

	render() {
		return (
			<div className="itemlist">
				{
					this.elementlist.map((el, index) => {
						switch (el.frontmatter.type) {
							case 'position':
								return <Workplace key={index} model={el} setModal={this.setModal} />;
							case 'project':
								return <Project key={index} model={el} setModal={this.setModal} />;
							case 'open-source':
								return <OpenSource key={index} model={el} setModal={this.setModal} />;
							default:
								throw Error("Invalid element type");
						}
					})
				}
			</div>
		);
	}
}

export default ItemList;
