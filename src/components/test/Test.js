import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("did mount");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, body: json.body }));
  }

  // // UNSAFE
  // componentWillMount() {
  //   console.log("component will mount");
  // }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // // UNSAFE
  // componentWillUpdate() {
  //   console.log("component will update");
  // }

  // // UNSAFE
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("component will receive props");
  // }

  // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

  render() {
    console.log("render");

    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
