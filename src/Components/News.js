import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      page:1,
      totalResults: 0,
      loading: true
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=fa382133821f4223b3597fec3dc85de9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading: false});
  }

  handlePrev = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=fa382133821f4223b3597fec3dc85de9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,page: this.state.page-1,loading: false});
  }

  handleNext = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=fa382133821f4223b3597fec3dc85de9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,page: this.state.page+1,loading: false});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-2">
          {!this.state.loading && this.state.articles.map((element)=>{
            return  (<div className="col-md-3 mx-4" key={element.url}>
                      <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>)
          })}
        </div>
        <div className='container' style={{display: 'flex',justifyContent: 'space-between'}}>
          <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrev}>&larr; Prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handleNext}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
