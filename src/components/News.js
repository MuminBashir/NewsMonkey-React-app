import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResults: -1,
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} News - NewsMonkey`;
  }

  updateNews = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let news = await fetch(url);
    this.props.setProgress(30);
    let parsedNews = await news.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedNews.articles,
      totalResults: parsedNews.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=fa9a5defa6f545d1b114bbe425369d8b&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let news = await fetch(url);
    this.props.setProgress(30);
    let parsedNews = await news.json();
    this.props.setProgress(50);
    this.setState({
      articles: this.state.articles.concat(parsedNews.articles),
      totalResults: parsedNews.totalResults,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="mb-4 text-center">
            NewsMonkey - {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p className="text-center my-4">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row container overflow-hidden">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : null}
                      desc={element.description ? element.description : null}
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.livemint.com/lm-img/img/2023/06/02/600x338/Go-Digit-s-plans-are-aimed-at-catering-to-the-newl_1678869305996_1685714347108.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
