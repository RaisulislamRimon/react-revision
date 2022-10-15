import React from "react";
import Blog3 from "../Blog3/Blog3";
import "./Blog2.css";

const Blog2 = (props) => {
  const { heading, author } = props;
  return (
    <div className="blog2">
      <div>
        <h2 style={{ color: "red" }}>This is Blog 2</h2>
        <h3>Heading: {props.heading}</h3>
        <h4>Author: {props.author}</h4>
      </div>
      <div>
        <Blog3
          allData={props}
          // heading={heading}
          // author={author}
        ></Blog3>
      </div>
    </div>
  );
};

export default Blog2;
