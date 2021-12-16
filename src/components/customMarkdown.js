import React from "react"
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

import '../styling/markdown.sass'

export const H1 = (props) => {
	return (
		<h1 className="markdown">{props.children}</h1>
	);
}

export const H2 = (props) => {
	return (
		<h2 className="markdown">{props.children}</h2>
	);
}

export const H3 = (props) => {
	return (
		<h3 className="markdown">{props.children}</h3>
	);
}

export const H4 = (props) => {
	return (
		<h4 className="markdown">{props.children}</h4>
	);
}

export const H5 = (props) => {
	return (
		<h5 className="markdown">{props.children}</h5>
	);
}

export const H6 = (props) => {
	return (
		<h6 className="markdown">{props.children}</h6>
	);
}

export const P = (props) => {
	return (
		<p className="markdown">{props.children}</p>
	);
}

export const Strong = (props) => {
	return (
		<strong className="markdown">{props.children}</strong>
	);
}

export const Em = (props) => {
	return (
		<em className="markdown">{props.children}</em>
	);
}

export const A = (props) => {
	return (
		<a href={props.href} className="markdown">{props.children}</a>
	);
}

export const Ul = (props) => {
	return (
		<ul className="markdown">{props.children}</ul>
	);
}

export const Ol = (props) => {
	return (
		<ol className="markdown">{props.children}</ol>
	);
}

export const Li = (props) => {
	return (
		<li className="markdown">{props.children}</li>
	);
}

export const BlockQuote = (props) => {
	return (
		<blockquote className="markdown">{props.children}</blockquote>
	);
}

export const Code = (props) => {
	console.log("Hai fuckin yahhhh");
	return (
		<code className="markdown">{props.children}</code>
	);
}

/** https://codetrain.io/adding-prism-syntax-highlighting-to-gatsby-mdx */
export const CodeBlock = (props) => {
	const className = props.children.props.className || ''
	const matches = className.match(/language-(?<lang>.*)/)
	return (
		<Highlight {...defaultProps} code={props.children.props.children.trim()} language={
			matches && matches.groups && matches.groups.lang
				? matches.groups.lang
				: ''
		}
			theme={theme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={{ ...style, padding: '20px' }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export const Custom = {
	code: Code,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	p: P,
	strong: Strong,
	em: Em,
	a: A,
	ul: Ul,
	ol: Ol,
	li: Li,
	pre: CodeBlock,
	blockquote: BlockQuote,
}
