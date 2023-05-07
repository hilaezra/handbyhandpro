import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div id="post" className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
        <h7 className="card-subtitle mb-2 text-muted">{post.tab}</h7>
        <p className="card-text">{post.content}</p>
        <p className="card-text">{post.participants}</p>
        <p className="card-text">{post.reviews}</p>
      </div>
    </div>
  );
}

export default Post;
