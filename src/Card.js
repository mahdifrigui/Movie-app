import React, { Component } from 'react';
import Rating from './Rating.js';
import 'bootstrap/dist/css/bootstrap.css';


class Card extends Component {
  render() {
    return (
      <div>
           <div className="card" style={{width: "15rem"}}>
            <img src={this.props.movie.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                  <h5 className="card-title">{this.props.movie.title}</h5>
                 <Rating number={this.props.movie.rating} onClickStar={() =>{}} />
              </div>
            </div>
      </div>
    );
  }
}

export default Card