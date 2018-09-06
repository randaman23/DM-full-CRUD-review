import React, { Component } from 'react';
import Post from './Post';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      username: 'username will go here',
      profilePic: '',
    };
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
        <h1>Profile Page</h1>
        <section className="profile_info">
          <img src={this.state.profilePic} alt="profile picture" />
          <h2>{this.state.username}</h2>
        </section>
        <section>{postsToDisplay}</section>
      </div>
    );
  }
}

export default Profile;
