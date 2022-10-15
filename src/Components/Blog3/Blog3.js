import React from "react";

const Blog3 = (props) => {
  const { heading, author } = props.allData;
  return (
    <div>
      <h2 style={{ color: "red" }}>This is Blog 3</h2>
      <h3>Heading: {heading}</h3>
      <h4>Author: {author}</h4>
    </div>
  );
};

export default Blog3;
