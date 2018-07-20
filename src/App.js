import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/home";
import About from "./Routes/about";
import Header from "./components/header";
import Posts from "./Routes/posts";
import Login from "./Routes/login";
import MyPage from "./Routes/myPage";
import Search from "./Routes/search";
import NoMatch from "./Routes/noMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
