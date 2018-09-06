import React, { Component } from 'react';

export default class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      captionInput: '',
      imageInput: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.addPost = this.addPost.bind(this);
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

  render() {
    return (
      <div>
        <h1>Add Post Page</h1>
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
      </div>
    );
  }
}
