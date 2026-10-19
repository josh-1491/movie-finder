import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { fetchMovies, fetchPopularMovies } from '../services/api';
import './Home.css';

function Home({ favorites, onToggleFavorite }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = searchQuery
                    ? await fetchMovies(searchQuery)
                    : await fetchPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        loadMovies();
    }, [searchQuery]);

    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a movie..."
                    aria-label="Search for a movie"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movie-list">
                {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isFavorite={favorites.some((favorite) => favorite.id === movie.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;