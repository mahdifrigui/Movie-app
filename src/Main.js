import React, { Component } from 'react';
import './Main.css';
import Card from './Card.js';
import Rating from './Rating.js';
import Search from './Search.js';
import NewFilm from './Newmovies.js';
import Matrix from './images/Matrix.png'
import Grey from './images/Grey.png'
import Transporter from './images/Transporter.png'
import Hoc from './Hoc.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: 0,
            movieName: '',
            listOfMovies: [
                {
                    title: 'The Grey',
                    img: Grey,
                    rating: 4,
                },
                {
                    title: 'Matrix',
                    img: Matrix,
                    rating: 3,
                },
                {
                    title: 'Transporter',
                    img: Transporter,
                    rating: 2,
                }
            ]
        }
    }
    searchMovie = (event) => {
        this.setState({ movieName: event.target.value })
    }
    addMovie = (data) => {
        this.setState({ listOfMovies: this.state.listOfMovies.concat(data) })
    }
    searchRateMovie = (data) => {
        
        this.setState({ rate: data })
    }
    render() {
        return (
            <div className="main" >
                <div className="search">
                    <Search searched={this.searchMovie} />
                    <Rating
                        number={this.state.rate}
                        onClickStar={i => this.searchRateMovie(i)} />

                </div>
                <div className="container">

                    <div className="row">
                        {this.state.listOfMovies.filter(el => el.title.toLowerCase().includes(this.state.movieName.toLowerCase()) && (el.rating >= this.state.rate)).map((el) =>
                            <div className="col">
                                <Card movie={el} />
                            </div>
                        )}
                        <div><NewFilm newmovies={this.addMovie} /> </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default Hoc (Main);