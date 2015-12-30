import React from 'react';

export default class TodoBox extends React.Component {
  render () {
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
  render: function () {
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
  render: function () {
    return (
      <tr>
        <td style={{border:"1px solid black"}}>{this.props.title}</td>
        <td style={{border:"1px solid black"}}>{this.props.children}</td>
      </tr>
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
