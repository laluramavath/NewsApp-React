import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="container my-2">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl? "https://imgs.search.brave.com/kkqqBUU7cQRjdc3KVySYVqDq0PYLEJ8LTPM49g0oIGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTcwNTg2NC9waG90/by90aGUtd29yZHMt/YnJlYWtpbmctbmV3/cy1vbi1hbi1hYnN0/cmFjdC1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ydDVWb3Rx/LUlyM2pzVG5fb2JJ/SDdUREs1N0g5MmJ3/UzN6dWlNQnI1ZHNZ/PQ": imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,45):""}..</h5>
            <p className="card-text">
              {description?description.slice(0,88):""}..
            </p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
