import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-secondary badge-pill">
            {this.props.totalCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
