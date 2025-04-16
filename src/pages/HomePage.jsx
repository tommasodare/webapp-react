import { useState, useEffect } from 'react';

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            }
            )
            .catch(error => console.error('Error fetching movies:', error));
    }, [])

    return (


        <div className="home-page text-center">

            <div className="jumbotron py-2 mb-2" style={{ backgroundColor: "blue", minHeight: "250px" }}>
                <div className="container">
                    <h1 className="display-4">Welcome to Movie App</h1>
                    <p>Explore our collection of movies</p>
                </div>
            </div>

            <h2 className='text-center mb-3 py-2'>Movies</h2>

            <section className="movies">
                <div className="container">
                    <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {movies.map(movie => (
                            <div key={movie.id}>
                                <div className="card" style={{ width: '25rem' }}>
                                    <img src={`http://localhost:3000/img/${movie?.image}`} alt="" className='card-img-top' style={{ height: "600px" }} />
                                    <div className="card-body">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>

    )

}