import React, { Component } from 'react';
import Feed from './components/Feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Login</li>
            <li>Feed</li>
            <li>Add New Post</li>
          </ul>
        </nav>
        <Feed />
      </div>
    );
  }
}

export default App;
