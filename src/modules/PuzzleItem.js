import React, { Component } from 'react';

class PuzzleItem extends Component {
	onNodeClick () {
		this.props.onNodeClick(this.props.index)
	}
	render () {
		return (
			<li className={this.props.num === '' ? 'puzzle-item empty' : 'puzzle-item'} onClick={this.onNodeClick.bind(this)}>
				{ this.props.num }
			</li>
		)
	}
}

export default PuzzleItem
