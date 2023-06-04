import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${this.state.page}&pageSize=18`;
    let news = await fetch(url);
    let parsedNews = await news.json();
    this.setState({
      articles: parsedNews.articles,
      totalResults: parsedNews.totalResults,
    });
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${
      this.state.page + 1
    }&pageSize=18`;
    let news = await fetch(url);
    let parsedNews = await news.json();
    this.setState({ articles: parsedNews.articles, page: this.state.page + 1 });
  };

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${
      this.state.page - 1
    }&pageSize=18`;
    let news = await fetch(url);
    let parsedNews = await news.json();
    this.setState({ articles: parsedNews.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="mb-4 text-center">NewsMonkey - Daily Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.livemint.com/lm-img/img/2023/06/02/600x338/Go-Digit-s-plans-are-aimed-at-catering-to-the-newl_1678869305996_1685714347108.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page === 1}
              type="button"
              className="btn btn-primary"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page === Math.ceil(this.state.totalResults / 18)
              }
              type="button"
              className="btn btn-primary"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
