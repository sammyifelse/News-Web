import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}> {source}</span>

            <img src={!imageUrl?"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png": imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} <span className="badge text-bg-success">Latest</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-danger">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
      </div>
      <div className="container">
      <button type="button" className="btn btn-dark">Previous</button>
      <button type="button" className="btn btn-dark">Next</button>
      </div>
    </div>
    )
  }
}
export default NewsItem
