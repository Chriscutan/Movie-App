import '../Pages/Home.css';
import MovieCard from '../Components/MovieCard';

import { useState, useEffect } from 'react';

function Home(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("https://my-netflix-5c479-default-rtdb.firebaseio.com/movies.json")
        .then(response=>response.json())
        .then(data=>{
            for(const key in data){
                const movie = {
                    id: key,
                    ...data[key]
                }

                movies.push(movie);
            }

            setLoading(false);
            setMovies(movies);
        })
    }, [])

    return(
        <div>
            <h1 className='heading'>All Movies</h1>

            <h1 className={loading ? 'loading' : 'd-none'}>Loading...</h1>

            <div className='movie-container'>
                {
                    movies.map((movie)=>{
                        return <MovieCard name={movie.name} genre={movie.genre} year={movie.year} />
                    })
                }
            </div>

            
        </div>
    );
}

export default Home;