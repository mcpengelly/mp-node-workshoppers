import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList />
				<TodoForm />
			</div>
		);
	}
}

var TodoList = React.createClass({
	render: function() {
		return (
			<div className='todoList'>
				I am a TodoList.
			</div>
		);
	}
});

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {checked: false};
	}

handleChange(e) {
	this.setState({checked: e.target.checked});
}

render() {
	return (
		<tr>
			<td style={{border: "1px solid black"}}>
				<input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
			</td>
				<td style={{border: "1px solid black"}}>{this.props.title}</td>
				<td style={{border: "1px solid black"}}>{this.props.children}</td>
		</tr>
		);
	}
}
Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};

var TodoForm = React.createClass({
	render: function() {
		return (
			<div className='todoForm'>
				I am a TodoForm.
			</div>
		);
	}
});
