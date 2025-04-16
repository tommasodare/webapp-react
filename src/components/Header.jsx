export default function Header() {

    return (

        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-2 mb-1">
                <img src="https://consumersiteimages.trustpilot.net/business-units/5fa97f4e91811d0001e0add7-198x149-1x.jpg" alt="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style={{ width: "4%" }} />
                <ul className="nav nav-pills gap-1">
                    <li className="nav-item">
                        <a href="http://localhost:5174/" className="nav-link" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="http://localhost:5174/movie" className="nav-link" aria-current="page">Movie</a>
                    </li>
                </ul>
            </header>
        </div>


    )

}