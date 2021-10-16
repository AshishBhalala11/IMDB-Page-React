import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const random_img = "https://media.istockphoto.com/vectors/movie-poster-template-cinema-design-in-flat-style-vector-id535504850";

const Movie = ({ title, poster_path, overview, vote_average, release_date, name , first_air_date}) =>{
    let date = 0; 
    let year = 0;
    if(release_date){
        date = new Date(release_date);
        year = date.getFullYear();
    }
    else{
        date = new Date(first_air_date);
        year = date.getFullYear();
    }
    

    return(
        <div className="movie-box">
            <div className="movie">
                <img className="movie-image" src={poster_path ? IMG_API+ poster_path : random_img} alt={title} />
            
                <div className="movie-overview">
                    <h3>Overview:</h3>
                    <p>{overview}</p>
                </div>
            </div>
            <div className="movie-info">
                <h3>{title ? title : name}</h3>
                <h6>{vote_average}/10 | {year}</h6>
            </div>
        </div>
        
    );
}

export default Movie;