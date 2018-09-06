import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editInput: props.caption,
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
    this.props.updateCaption(this.props.id, this.state.editInput);
    this.setState({ editing: false });
  }

  handleDelete() {
    this.props.deletePost(this.props.id);
  }

  render() {
    const { editing } = this.state;
    console.log(this.props.image);
    return (
      <div className="post">
        <div className="image_container">
          <img src={this.props.image} alt={this.props.caption} />
        </div>
        {this.state.editing ? (
          <input type="text" onChange={this.handleInput} value={this.state.editInput} />
        ) : (
          <p>{this.state.editInput}</p>
        )}
        <button onClick={editing ? this.handleSave : this.toggleEdit}>{editing ? 'Save' : 'Edit'}</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
