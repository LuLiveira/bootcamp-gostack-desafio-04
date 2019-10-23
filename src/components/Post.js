import React, { Component } from 'react';

import Comment from './Comment';

export default class Post extends Component {
  render() {
    return (
        <div className="post">
          <div className="avatar">
            <img src={ this.props.post.author.avatar }/>
          </div>
          <div className="post-header">
            <strong>{ this.props.post.author.name }</strong><br/>
            <small>{ this.props.post.date }</small><br/>
          </div>
          <div className="post-content">
            <p> { this.props.post.content }</p>
          </div>
          <hr/><br/>
            {
              this.props.post.comments.map(comment => <Comment key={comment.id} data={comment} />)
            }
        </div>
    );
  }
}
