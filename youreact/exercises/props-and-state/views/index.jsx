// creating a react view
// add react dependency

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
      <TodoList/>
    );
  }
}

class TodoList extends React.Component {
  render () {
    var todo = this.props.data.map(function (obj) {
      <Todo key={obj.title} title={obj.title}>
        {obj.details}
      </Todo>;
    });

    return (
      <div>
        <h1>List of Todos</h1>
        <table>
          <tbody>{todo}</tbody>
        </table>
        <ul>
          <li>{todo}</li>
        </ul>
      </div>
    );
  }
}

// sometimes react components are wrapped in a div with a className
// property defined as a camelcase version of the class's name
class Todo extends React.Component {
  constructor (properties) {
    this.super(properties);
    this.state = { complete: false };
  }
  handleChange (ev) {
    this.setState({ ev.properties.complete });
  }
  render () {
    return (
    );
  }
}

class TodoForm extends React.Component {
  render () {
    return (
      <div className="todoForm">
        <p>I am a todo form.</p>
      </div>
    );
  }
}
