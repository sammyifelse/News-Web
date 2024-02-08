import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }



  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,

    }
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1573aadfbe437aaa072220daea3f1f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  }


  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1573aadfbe437aaa072220daea3f1f&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
    this.updateNews();
  }

   handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1573aadfbe437aaa072220daea3f1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({loading:true});
    // let parsedData = await data.json();
    // this.setState()
    // this.setState({
    //   page: this.state.page - 1,
    //   articles:  parsedData.articles,
    //   loading:false
    // })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }
  handleNextClick = async () => {
    console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /  this.props.pageSize))){

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
  // }
  this.setState({page: this.state.page + 1});
  this.updateNews();
}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px;'}}>NewsReader - Top  Headlines</h1>
        {this.state.loading && <Spinner/>}  {/*//if the loading is true then only  show spinner otherwise don't show anything */}
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} 
              imageUrl={element.urlToImage} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button> 
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> 

        </div>
        
      </div>
    )
  }
}
export default News
