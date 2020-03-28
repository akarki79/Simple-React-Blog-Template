import React from "react";

import "./Posts.css";

import Post from "../Post/Post";

const Posts = () => {
  const blogPosts = [
    {
      title: "Post One",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 1",
      imgUrl: "https://picsum.photos/id/10/500"
    },
    {
      title: "Post Two",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 2",
      imgUrl: "https://picsum.photos/id/20/500"
    },
    {
      title: "Post Three",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 3",
      imgUrl: "https://picsum.photos/id/30/500"
    },
    {
      title: "Post Four",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
      author: "Author 4",
      imgUrl: "https://picsum.photos/id/40/500"
    }
  ];

  //title, body , img, author
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
