import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      captionInput: '',
      imageInput: '',
      editInput: '',
      posts: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.addPost = this.addPost.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    axios.get('/api/posts').then(res => this.setState({ posts: res.data }));
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  addPost() {
    axios
      .post('/api/post', { caption: this.state.captionInput, image: this.state.imageInput })
      .then(res => this.setState({ posts: res.data, captionInput: '', imageInput: '' }));
  }
  deletePost(id) {
    axios.delete(`/api/post/${id}`).then(res => this.setState({ posts: res.data }));
  }
  updateCaption(id, str) {
    axios.put(`/api/post/${id}`, { caption: str }).then(res => this.setState({ posts: res.data }));
  }

  render() {
    let postsToDisplay = this.state.posts.map((e, i) => {
      return (
        <Post
          key={e.post_id}
          id={e.post_id}
          updateCaption={this.updateCaption}
          image={e.image}
          caption={e.caption}
          deletePost={this.deletePost}
        />
      );
    });
    return (
      <div className="App">
        <section className="add_post">
          <input
            type="text"
            name="imageInput"
            value={this.state.imageInput}
            onChange={this.handleInput}
            placeholder="add an image"
          />
          <input
            type="text"
            name="captionInput"
            value={this.state.captionInput}
            onChange={this.handleInput}
            placeholder="add a caption"
          />
          <button onClick={this.addPost}>Post!</button>
        </section>
        {postsToDisplay}
      </div>
    );
  }
}

export default App;
