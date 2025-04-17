import { useState } from "react";
import { useParams } from 'react-router-dom';

export default function Form() {

    const { id } = useParams()

    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const reviewData = {
            ...formData,
            movie_id: id
        }

        fetch(`http://localhost:3000/api/v1/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFormData({
                    name: "",
                    text: "",
                    vote: ""
                })
            })
            .catch(error => console.error('Error:', error));
    }

    return (

        <div className="container" style={{ width: "50%", border: "1px solid blue", padding: "20px", marginBottom: "50px", borderRadius: "20px" }}>

            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control" id="formGroupExampleInput" placeholder="Insert here your name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>
                    <input type="text"
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Insert here your review" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Vote</label>
                    <input
                        type="number"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                        name="rating" min="1" max="5" className="mx-2" required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>

            </form>
        </div>

    )

}