import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editInput: props.caption
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleInput(e) {
    this.setState({ editInput: e.target.value });
  }

  handleSave() {
    this.props.updateCaption(this.props.id, this.state.editInput, this.props.user_id);
    this.setState({ editing: false });
  }

  handleDelete() {
    this.props.deletePost(this.props.id);
  }

  render() {
    const { editing } = this.state;
    const { caption, image, user_img, username, user_id } = this.props;
    console.log(this.props.image);
    return (
      
      <div className="post">
      <Link to={`/profile/${user_id}`}>
        <div className="user_info">
          <img src={user_img} alt="user image" className="pic_thumbnail" />
          <p>{username}</p>
        </div>
        </Link>

        <div className="image_container">
          <img src={image} alt={caption} />
        </div>
        {this.state.editing ? (
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.editInput}
          />
        ) : (
          <p>{this.state.editInput}</p>
        )}
        <button onClick={editing ? this.handleSave : this.toggleEdit}>
          {editing ? "Save" : "Edit"}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
