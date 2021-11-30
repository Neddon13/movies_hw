import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return <Movie name={movie.name} url={movie.url}/>
    })

    return (
    <> 
        <ul className="movie-list">
        {movieNodes}
        </ul>
    </>
    )};

export default MovieList;