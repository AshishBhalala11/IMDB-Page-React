import React, {useState} from 'react';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&query=";
const POPULAR_API = "https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort";
const NEWEST = "https://api.themoviedb.org/3/movie/now_playing?api_key=3a94078fb34b772a31d9a1348035bed7";
const TRENDING_API = "https://api.themoviedb.org/3/trending/movie/day?api_key=3a94078fb34b772a31d9a1348035bed7";
const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7";

const Header = (props) => {
    const[searchValue , setSearchValue] = useState('');

    const handleOnSubmit =(e) => {
        e.preventDefault();
        if(searchValue){
            const apiUrl = SEARCH_API + searchValue;
            //console.log('url', apiUrl);
            fetchMovie(apiUrl);
            
            setSearchValue('');
        }
        
    }

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
        //console.log('searchbar', searchValue);
    }

    const ActionClick = (API) => {  
        fetchMovie(API);
    }

    const fetchMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                props.search(data.results);
            })
    }


    return(
        <header className="header">
            <h1>Discover</h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="javascript:void(0)" onClick={()=> ActionClick(POPULAR_API)}>popular</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={()=> ActionClick(NEWEST)}>newest</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={()=> ActionClick(TRENDING_API)}>trending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={()=> ActionClick(TOP_RATED)}>top rated</a>
                    </li>
                </ul>
            </nav>
            <div className="search-bar">
                <span className="search-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
                <form onSubmit={handleOnSubmit}>
                <input type="text" id="search" autoComplete="off" placeholder="Search" className="search" value={searchValue} onChange={handleOnChange}></input>
                </form>
            </div>
        </header>
    );
}

export default Header;