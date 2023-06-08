import Movie from "./Movie";

function MoviesList(){
const movies = {
    "title": "The Matrix",
    "year": 1999,
    "rated": "R",
    "released": "1999-03-30",
    "runtime": "136 min",
    "genre": "Action, Sci-Fi",
    "director": "<NAME>",
    "writer": "<NAME>, <NAME>",
    "actors": "<NAME>, <NAME>, <NAME>, <NAME>",
    
}

const movieItems = movies.map(movie => (
    <li>{movie.title}</li>
))
    return(
        <div className="MoviesList dkfjsldfj">
            <ul>
                {movieItems}
                {/* {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li> 
                ))   /* (Used this without the const movieItems)*/}
            </ul>
        </div>
    )
}

export default MoviesList