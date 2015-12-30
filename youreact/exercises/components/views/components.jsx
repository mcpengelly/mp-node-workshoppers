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

//react components below
//todo list class that renders a div with some content when it finds the class
var TodoList = React.createClass({
	render: function() {
		return (
			<div className='todoList'>
				I am a TodoList.
			</div>
		);
	}
});

var TodoForm = React.createClass({
	render: function() {
		return (
			<div className='todoForm'>
				I am a TodoForm.
			</div>
		);
	}
});
