import "./App.css";
import Blog from "./Components/Blog/Blog";
import Mobile from "./Components/Mobile/Mobile";

function App() {
  const headingStyle = {
    color: "tomato",
    backgroundColor: "white",
    margin: "0",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
  };
  const blogDetails = {
    heading: "This is Blog 1",
    author: "John Doe",
  };
  return (
    <div className="App">
      <div className="article-div">
        <article className="blog">
          <h2 style={headingStyle}>Google Chrome</h2>
          <h4>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!
          </h4>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "grey",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            &copy; Copyright - 2022
          </p>
        </article>
      </div>
      <Blog heading={blogDetails.heading} author={blogDetails.author}></Blog>
      <Mobile />
    </div>
  );
}

export default App;
