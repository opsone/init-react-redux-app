import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { todo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  componentWillMount = () => {
    this.props.fetchAll();
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleCreate = event => {
    this.props.create({
      id: new Date(),
      name: this.state.value,
      checked: false
    });
  }

  handleUpdate = todo => {
    this.props.update({
      ...todo,
      checked: !todo.checked
    });
  }

  handleRemove = todo => {
    this.props.remove(todo.id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleCreate} >Add</button>
        </header>

        <ul className="App-intro">
          { this.props.todos.map(todo => (
            <li key={todo.id}>
              <label><input type="checkbox" checked={todo.checked} onClick={() => this.handleUpdate(todo)} /> {todo.name}</label>
              <button onClick={() => this.handleRemove(todo)} >Remove</button>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = appState => {
  return {
    todos : appState.todos,
  };
};

const mapDispatchToProps = {
  fetchAll: todo.fetch.dispatch,
  create: todo.create.dispatch,
  update: todo.update.dispatch,
  remove: todo.remove.dispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
