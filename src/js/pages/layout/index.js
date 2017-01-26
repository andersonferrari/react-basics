import React from "react";
import { IndexLink, Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h3>....layout page start....</h3>
        <IndexLink to="/">Home!</IndexLink>
        <Link to="country">Country!</Link>
        <Link to="state">State!</Link>

        {this.props.children}

        <h3>....layout page end....</h3>
      </div>
    );
  }
}