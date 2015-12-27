import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return(
			<div className="TodoBox">
				<TodoList />
				<Todo />
				<TodoForm />
			</div>
		);
	}
}

var TodoList = React.createClass({
render: function() {
	return (
		<div className="todoList">
			<table style={{border: "2px solid black"}}>
				<tbody>
					<Todo title="Shopping">Milk</Todo>
					<Todo title="Hair cut">13:00</Todo>
				</tbody>
			</table>
		</div>
		);
	}
});

var Todo = React.createClass({
	render: function() {
		return (
			<td>todo</td>
		);
	}
});

var TodoForm = React.createClass({
	render: function() {
		return (
			<td>form</td>
		);
	}
});
