import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './card.css'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();

        this.state = {
            article: [],
            loading: false,
            page: 1,
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-14&sortBy=publishedAt&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ article: parsedData.articles });
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-14&sortBy=publishedAt&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ article: parsedData.articles, page: this.state.page - 1, totalResults: parsedData.totalResults });
    };
    handleNextClick = async () => {
        if ((this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.page))) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-14&sortBy=publishedAt&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ article: parsedData.articles, page: this.state.page + 1, totalResults: parsedData.totalResults });
        }
    };

    render() {
        return (
            <div className='container c1'>
                <h1 className='my-5'>NewsMonkey- Top News</h1>
                <Spinner />
                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4 my-3 d-flex justify-content-center" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 42) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.debate.com.mx/__export/1663959635047/sites/debate/img/2022/08/31/elon.png_242310155.png"} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between my-5 ">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.page)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News
