import React, { Component } from 'react';
import PuzzleItem from './PuzzleItem'

class PuzzleBox extends Component {
	constructor (props) {
		super(props)
		this.state = {puzzles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
	}
	componentDidMount () {
		this.upset()
	}
	upset () {
		let newPuzzles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		newPuzzles = newPuzzles.sort(() => {
			return Math.random() - 0.5
		})
		newPuzzles.push('')
		this.setState({puzzles: newPuzzles})
	}
	moveNode (index) {
		let order = 4,
			newPuzzles = this.state.puzzles
		let topIndex = index - 4,
			rightIndex = index + 1,
			bottomIndex = index + 4,
			leftIndex = index - 1

		if (newPuzzles[topIndex] === '') { // top
			newPuzzles[topIndex] = newPuzzles[index]
			newPuzzles[index] = ''
		} else if ((index + 1) % order > 0 && newPuzzles[rightIndex] === '') { // right
			newPuzzles[rightIndex] = newPuzzles[index]
			newPuzzles[index] = ''
		} else if (newPuzzles[bottomIndex] === '') { // bottom
			newPuzzles[bottomIndex] = newPuzzles[index]
			newPuzzles[index] = ''
		} else if ((index + 1) % order !== 1 && newPuzzles[leftIndex] === '') { // left
			newPuzzles[leftIndex] = newPuzzles[index]
			newPuzzles[index] = ''
		}
		this.setState({puzzles: newPuzzles})
		if (this.isPass()) {
			setTimeout(() => {
				alert('拼图成功！')
				this.upset()
			}, 100)
		}
	}
	isPass () {
		return this.state.puzzles.slice(0, 15).every((value, index) => {
			return value === index + 1
		})
	}
	render () {
		let puzzleNodes = this.state.puzzles.map((value, index) => {
			return (
				<PuzzleItem key={index} num={value} index={index} onNodeClick={this.moveNode.bind(this)}/>
			)
		})
		return (
			<div className="puzzle-box">
				<ul>
					{ puzzleNodes }
				</ul>
				<button className="btn-reset" onClick={this.upset}>重置</button>
			</div>
		)
	}
}

export default PuzzleBox
