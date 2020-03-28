import React from "react";

import "./Post.css";

//title, body , image, author

const Post = props => {
  return (
    <div className="post-container">
      <h1 className="heading">{props.post.title}</h1>
      <img src className="image" src={props.post.imgUrl} alt="post" />
      <p>{props.post.body}</p>
      <div className="info">
        <h5>Post: {props.index + 1}</h5>
        <h4>Written by: {props.post.author}</h4>
      </div>
    </div>
  );
};

export default Post;
