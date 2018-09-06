import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.updateCaption = this.updateCaption.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    axios.get('/api/posts').then(res => this.setState({ posts: res.data }));
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
        <h1>Feed Page</h1>
        {postsToDisplay}
      </div>
    );
  }
}

export default Feed;
