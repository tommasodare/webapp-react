import { useState } from "react"
import GlobalContext from '../src/contexts/GlobalContext';
import { useContext } from 'react';

export default function CreateMovie() {
    const { setIsLoading } = useContext(GlobalContext);
    const [movieData, setMovieData] = useState({
        title: "",
        abstract: "",
        genre: "",
        director: "",
        image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        fetch('http://localhost:3000/api/v1/movies', {  // URL corretto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                console.log("Movie added successfully:", data);
                setMovieData({
                    title: "",
                    abstract: "",
                    genre: "",
                    director: "",
                    image: ""
                });
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Add New Movie</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={movieData.title}
                                onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">Abstract</label>
                            <textarea
                                className="form-control"
                                id="abstract"
                                rows="3"
                                value={movieData.abstract}
                                onChange={(e) => setMovieData({ ...movieData, abstract: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="genre"
                                value={movieData.genre}
                                onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input
                                type="text"
                                className="form-control"
                                id="director"
                                value={movieData.director}
                                onChange={(e) => setMovieData({ ...movieData, director: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                value={movieData.image}
                                onChange={(e) => setMovieData({ ...movieData, image: e.target.value })}
                            /* required */
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Add Movie</button>
                    </form>
                </div>
            </div>
        </div>
    );
}