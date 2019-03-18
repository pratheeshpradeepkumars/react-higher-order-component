import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './components/Users';
import './style.css';

class App extends Component {
  constructor() { 
    super();
    this.state = { 
      users: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(parseResponse => 
        parseResponse.map(user => ({
          name: user.login,
          type: user.type,
          url: user.url
        }))
      )
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    return (
      <div>
        <h4>React HOC Example</h4>
        <Users users={this.state.users} placeholder={"Search User"}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
