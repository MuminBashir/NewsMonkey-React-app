import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card my-3 mx-1">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: "91%"}}>
            {source}
          </span>
          <img
            src={imgUrl}
            className="card-img-top"
            style={{ height: "220px" }}
            alt="error"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text mt-4">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
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
