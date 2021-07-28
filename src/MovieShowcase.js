import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log(movieData)
  		return movieData.map(m =>
          <MovieCard
  		      title={m.title}
  		      IMDBRating={m.IMDBRating}
  		      genres={m.genres}
  		      poster={m.poster}
  		    />)
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
