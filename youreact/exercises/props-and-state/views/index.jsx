// creating a react view
// add react dependency so the parser knows how to parse this file

import React from 'react';

// create a component
// a react component is an object/class that extends React.component
// it inherits a render function in which you can put html that can
// be reandered on the server
// var border = {
//   thin: {
//     border: '1px solid black'
//   }
// }

// inside the render functions youre able to specify expressions in curly braces, it allows you to put html inside your js
//

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

class TodoList extends React.Component {
  render () {
    return (
      <div className="todoList">
        <table>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

// sometimes react components are wrapped in a div with a className
// property defined as a camelcase version of the class's name
class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = { complete: false };
  }
  handleChange (ev) {
    this.setState({ complete: ev.target.complete });
  }
  render () {
    return (
      <tr>
        <td>
          <input complete={this.state.complete}
            onChange={this.handleChange}
            type="checkbox"
          />
        </td>

      </tr>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  render () {
    return (
      <div className="todoForm">
        I am a todo form.
      </div>
    );
  }
}
