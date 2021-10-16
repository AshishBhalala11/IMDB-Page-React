import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import Header from './components/Header';
import Filter from './components/Filter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort";
//const SEARCH_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&query=";

function App() {
  const[movies, setMovies] = useState([]);

  const searchMovies = (myMovies) => {
    const filteredResult = myMovies.filter((movie) => {
      const year = new Date(movie.release_date).getFullYear();
      const rating = movie.vote_average;
      const path = movie.poster_path;
      return (year >= 2000 && year <= 2021 && rating !== 0 && path !== null);
    })
    console.log('movie list:', filteredResult);
    setMovies(filteredResult);
  }

  const filterSeries = (myMovies) => {
    const filteredResult = myMovies.filter((movie) => {
      const year = new Date(movie.first_air_date).getFullYear();
      const rating = movie.vote_average;
      const path = movie.poster_path;
      return (year >= 2000 && year <= 2021 && rating !== 0 && path !== null);
    })
    console.log('movie list:', filteredResult);
    setMovies(filteredResult);
  }

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) =>{
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);    
    })
  }

  return (
    <div className="body">
      <div className="movie-section">
        
        <Header search = {searchMovies} />
  
        <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />
        })}
        </div>
      </div>
      
      <Filter search = {searchMovies} filter = {filterSeries}/>
      
    </div>
  );
}

export default App;
