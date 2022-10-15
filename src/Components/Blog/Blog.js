import React from "react";
import Blog2 from "../Blog2/Blog2";
import "./Blog.css";

const Blog = (props) => {
  const { heading, author } = props;
  return (
    <div className="blog1">
      <div>
        <h2 style={{ color: "red" }}>This is Blog 1</h2>
        <h3>Heading: {props.heading}</h3>
        <h4>Author: {props.author}</h4>
      </div>
      <div>
        <Blog2 heading={heading} author={author} />
      </div>
    </div>
  );
};

export default Blog;
