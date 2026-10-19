
import { useEffect, useState } from 'react';
import './MovieCard.css';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (!showDetails) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setShowDetails(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [showDetails]);

    return (
        <div className="movie-card-container">
            <div className="movie-card">
                <button
                    className="movie-card-trigger"
                    onClick={() => setShowDetails(true)}
                    aria-label={`Show details for ${movie.title}`}
                >
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt=""
                        />
                    )}
                    <h2>{movie.title}</h2>
                    {movie.release_date && <p>{movie.release_date.slice(0, 4)}</p>}
                </button>
            </div>
            <div className="movie-overlay">
                <button
                    className="favorite-btn"
                    onClick={() => onToggleFavorite(movie)}
                    aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites: ${movie.title}`}
                    aria-pressed={isFavorite}
                >
                    ♥
                </button>
            </div>
            {showDetails && (
                <div
                    className="movie-details-backdrop"
                    onClick={() => setShowDetails(false)}
                >
                    <section
                        className="movie-details"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`movie-title-${movie.id}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="movie-details-close"
                            onClick={() => setShowDetails(false)}
                            aria-label="Close movie details"
                            autoFocus
                        >
                            ×
                        </button>
                        <h2 id={`movie-title-${movie.id}`}>{movie.title}</h2>
                        {movie.release_date && <p>{movie.release_date.slice(0, 4)}</p>}
                        <p>{movie.overview || 'No description available.'}</p>
                    </section>
                </div>
            )}
        </div>
    );
}

export default MovieCard;