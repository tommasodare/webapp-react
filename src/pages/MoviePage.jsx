import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviePage() {

    const { id } = useParams()

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            }
            )
            .catch(error => console.error('Error fetching movies:', error));
    }, [])

    return (


        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Ciao</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                </div>
            </div>

            <div className="movie-page">
                {
                    movies.map(review => (
                        <div key={review.review_id}>
                            <div className="card" style={{ width: '25rem' }}>
                                <div className="card-body">
                                    <p>{review.text}</p>
                                    <p>{review.vote}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>



    )

}