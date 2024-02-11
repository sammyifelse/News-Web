import React from 'react'

const NewsItem = (props)=>{
    let {title, description, imageUrl,newsUrl,author,date,source} = props
    return (
      <div className="my-3">
        <div className="card">
        <div style={{
             display: 'flex',
             justifyContent:'flex-end',
             position:'absolute',
             right: '0'
             }
             }>
        <span className="badge rounded-pill bg-danger "> {source}</span>
        </div>

            <img src={!imageUrl?"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png": imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} <span className="badge text-bg-success">Latest</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-danger">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
      </div>
    </div>
    )
}
export default NewsItem
