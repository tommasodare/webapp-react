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

    function printRating(vote) {

        const stars = []
        const empty = []

        for (let index = 0; index < vote; index++) {
            stars.push(<i className="bi bi-star-fill" key={`full-${index}`}></i>)

        }

        for (let index = 0; index < 5 - vote; index++) {
            empty.push(<i className="bi bi-star" key={`empty-${index}`}></i>)

        }

        return [...stars, ...empty]
    }


    return (


        <>

            <div className="px-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <img src={`http://localhost:3000/img/${movie?.image}`} alt="" style={{ height: "400px" }} />
                    <h2>{movie.title}</h2>
                    <p className="col-md-8 fs-5">{movie.abstract}</p>
                    <p>{movie.vote}</p>
                    <p>{movie.text}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.release_year}</p>
                </div>
            </div>


            <div className="container text-center mb-5">
                <h2 className='mb-3'>Reviews</h2>

                {
                    reviews.map(review => (
                        <div className="card mb-3" key={review.id}>
                            <div className="card-body">
                                <h5 className="card-title">{review.name}</h5>
                                <p className="card-text">{review.text}</p>
                                <p className='card-text'>{printRating(review.vote)}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </>



    )

}