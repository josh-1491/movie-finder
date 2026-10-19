import MovieCard from '../components/MovieCard';

function Favorites({ favorites, onToggleFavorite }) {
    return (
        <div className="favorites-page">
            <h1>My Favorites</h1>
            {favorites.length > 0 ? (
                <div className="movie-list">
                    {favorites.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isFavorite
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            ) : (
                <p>No favorite movies yet.</p>
            )}
        </div>
    );
}

export default Favorites;