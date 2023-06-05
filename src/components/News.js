import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  static defaultProps = {
    category: "general",
    pageSize: 12,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} News - NewsMonkey`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let news = await fetch(url);
    let parsedNews = await news.json();
    this.setState({
      articles: parsedNews.articles,
      totalResults: parsedNews.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="mb-4 text-center">
            NewsMonkey - {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row container">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
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
                this.state.page ===
                Math.ceil(this.state.totalResults / this.props.pageSize)
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
