import '../Components/MovieCard.css';

function MovieCard(props){
    return(
        <div className='movie-card'>
            <img src={"https://source.unsplash.com/1600x800?" + props.name} className="movie-img"/>
            <h2>{props.name}</h2>
            <h3>{props.genre}</h3>
            <h3>{props.year}</h3>
        </div>
    );
}

export default MovieCard;