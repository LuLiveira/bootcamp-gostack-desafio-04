import React, { Component } from 'react';

export default class Comments extends Component {
  render() {
    return (
      <div className="comment">
        <div className="avatar">
          <img src={this.props.data.author.avatar} />
        </div>
        <div className="author">
          <strong> {this.props.data.author.name} </strong>
        </div>
        <div className="comment-content">
          <p> {this.props.data.content} </p>
        </div>
      </div>
    );
  }
}
