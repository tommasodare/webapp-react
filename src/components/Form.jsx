import { useState } from "react";

export default function Form() {

    return (

        <div className="container" style={{ width: "50%", border: "1px solid blue", padding: "20px", marginBottom: "50px", borderRadius: "20px" }}>

            <form className="row g-3 needs-validation">

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Insert here your name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Insert here your review"></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Vote</label>
                    <input type="number" name="rating" min="1" max="5" className="mx-2" required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>

            </form>
        </div>

    )


}