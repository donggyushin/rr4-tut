import React from "react";
import { Route, Link } from "react-router-dom";

const post = ({ match }) => {
  return <div>{match.params.title}</div>;
};

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/posts/react">react </Link>
      <Link to="/posts/redux">redux </Link>
      <Link to="/posts/router">router</Link>
      <Route path="/posts/:title" component={post} />
    </div>
  );
};

export default Posts;
