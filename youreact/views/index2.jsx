import React from 'react';

export default class TodoBox extends React.Component {
// Omitted
}

var TodoList = React.CreateClass({
render() {
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

var Todo = React.CreateClass({
	render() {
		return (

		);
	}
});

var TodoForm = React.CreateClass({
	render() {
		return (

		);
	}
});
