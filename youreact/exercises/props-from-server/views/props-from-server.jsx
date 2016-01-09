import React from 'react';

let borderThin = {
  tableContent: {
    border: '1px solid black'
  }
};

export default class TodoBox extends React.Component {
  render () {
    return (
      <div className="todoBox">
      <h1>Todos</h1>
      <TodoList data = {this.props.data} />
      <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render () {
    var todo = this.props.data.map(function (obj) {
      return (
        <Todo key={obj.title} title={obj.title}>
        {obj.detail}
        </Todo>);
    });
    return (
      <div className="todoList">
        <table style={{border: '2px solid black'}}>
          <tbody>
          {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {checked: false};
  }

  handleChange (e) {
    this.setState({checked: e.target.checked});
  }

  render () {
    return (
      <tr>
        <td style={borderThin.tableContent}>
          <input checked={this.state.checked}
          onChange={this.handleChange}
          type="checkbox"
          />
        </td>
        <td style={borderThin.tableContent}>{this.props.title}</td>
        <td style={borderThin.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}

class TodoForm extends React.Component {
  render () {
    return (
      <div className='todoForm'>
      I am a TodoForm.
      </div>
    );
  }
}
