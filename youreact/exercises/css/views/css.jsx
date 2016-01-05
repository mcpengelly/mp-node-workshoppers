
import React from 'react';

let borderThin = {
  tableContent: {
    border: '1px solid black'
  }
};

let borderThick = {
  tableContent: {
    border: '2px solid black'
  }
};

export default class TodoBox extends React.Component {
  render () {
    return (
      <div className='todoBox'>
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render () {
    return (
      <div className='todoList'>
        <table style={borderThick.tableContent}>
          <tbody>
            <Todo title='Shopping'>Milk</Todo>
            <Todo title='Hair cut'>13:00</Todo>
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
          <input type='checkbox' checked={this.state.checked} onChange={this.handleChange}/>
        </td>
        <td style={borderThin.tableContent}>{this.props.title}</td>
        <td style={borderThin.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {

};

class TodoForm extends React.Component {
  render () {
    return (
      <div className='todoForm'>
      I am a TodoForm.
      </div>
    );
  }
}
