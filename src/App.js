import React, { Component } from 'react';
import routes from './routes'
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
        {routes}
      </div>
    );
  }
}

export default App;
