import React,{useState} from 'react';

// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&query=";
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7";
const SERIES_API = "https://api.themoviedb.org/3/tv/popular?api_key=3a94078fb34b772a31d9a1348035bed7";

const Filter = (props) =>{
    const yearArray = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];

    const typeChange = (e) => {
        //console.log(e.target.value);
        const type = e.target.value;
        (type === 'Movies') ? fetchMovie(MOVIE_API) : fetchseries(SERIES_API);
        
    }
    const genreChange = (e) => {
        
    }
    const fromYearChange = (e) => {
        
    }
    const toYearChange = (e) => {
        
    }

    const fetchMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);                
                props.search(data.results);
            })
    }
    const fetchseries = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);                
                props.filter(data.results);
            })
    }

    return(
        <div className="filter-section">
            <h3>Discover options</h3>
            <form className="filter-form">
            <div className="lable">Type</div>
            <select id="type" className="form-select selection" aria-label="Default select example" onChange={typeChange}>
                <option value="Movies">Movies</option>
                <option value="TV-Series">TV Series</option>
            </select>
            <div className="lable">Genre</div>
            <select id="genre" className="form-select selection" aria-label="Default select example" onChange={genreChange}>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="Sci-Fi">Sci-Fi</option>
            </select>
            <div className="lable">Year</div>
            <select id="from-year" className="form-select selection" aria-label="Default select example" onChange={fromYearChange}>
                {yearArray.map((year) => {
                    return <option key={year} value={`${year}`}>{year}</option>
                })}
            </select>
            <select id="to-year" className="form-select selection" aria-label="Default select example" onChange={toYearChange}>
                {yearArray.map((year) => {
                    return <option key={year} value={`${year}`}>{year}</option>
                })}
            </select>
            </form>
            
        </div>
    );
}

export default Filter;