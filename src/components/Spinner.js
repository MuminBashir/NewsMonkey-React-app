import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
  }
}
