import '../Pages/AddMovies.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMovies(){

    const navigate = useNavigate();
    const movieName = useRef();
    const movieGenre = useRef();
    const movieYear = useRef();

    function SubmitHandler(event){
        event.preventDefault();

        const name = movieName.current.value;
        const genre = movieGenre.current.value;
        const year = movieYear.current.value;

        const movieDetails = {
            name: name,
            genre: genre,
            year: year
        }

        fetch("https://my-netflix-5c479-default-rtdb.firebaseio.com/movies.json", {
            method:'post',
            body:JSON.stringify(movieDetails)
        })
        .then(()=>{
            navigate('/');
        })
    }


    return(
        <div>
            <form className="form-container" onSubmit={SubmitHandler}>
                <h1 className="title">Add Movie Here</h1>
                <input type="text" placeHolder="Movie Name" ref={movieName}/>
                <input type="text" placeHolder="Movie Genre" ref={movieGenre} />
                <input type="number" placeHolder="Release Year" ref={movieYear}/>
                <button className="btn" type="reset">Reset</button>
                <button className="btn" type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovies;