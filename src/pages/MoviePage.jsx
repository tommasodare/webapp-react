import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState([]);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.reviews);
                setMovie(data);
                setReviews(data.reviews);

            }
            )
            .catch(error => console.error('Error fetching movies:', error));
    }, [])


    return (


        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <img src={`http://localhost:3000/img/${movie?.image}`} alt="" style={{ height: "400px" }} />
                    <h2>{movie.title}</h2>
                    <p className="col-md-8 fs-5">{movie.abstract}</p>
                    <p>{movie.vote}</p>
                    <p>{movie.text}</p>
                </div>
            </div>

            {
                reviews.map(review => (
                    <div className="card mb-3" key={review.id}>
                        <div className="card-body">
                            <h5 className="card-title">{review.title}</h5>
                            <p className="card-text">{review.text}</p>
                            <p className="card-text"><small className="text-muted">{review.created_at}</small></p>
                        </div>
                    </div>
                ))
            }

        </>



    )

}