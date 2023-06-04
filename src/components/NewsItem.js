import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card my-3 mx-1">
          <img
            src={imgUrl}
            className="card-img-top"
            style={{ height: "220px" }}
            alt="error"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
