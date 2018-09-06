import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = type => () => {
    axios.post(`/api/${type}`, this.state).then(response => {
      console.log(response.data); // this is where we will put the response in the redux store
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.handleClick('login')}>Login</button>
        <button onClick={this.handleClick('register')}>Register</button>
      </div>
    );
  }
}
