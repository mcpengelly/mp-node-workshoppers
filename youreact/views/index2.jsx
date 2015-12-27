import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoForm />
			</div>
		);
	}
}

var TodoForm = React.createClass({
	render: function() {
		return (
			<div className='todoForm'>
				I am a TodoForm.
			</div>
		);
	}
});
