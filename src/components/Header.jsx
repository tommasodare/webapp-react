import NavBar from "./NavBar"

export default function Header() {

    return (

        <div className="header_box" style={{ backgroundColor: "#001534", height: "80px", marginBottom: "40px" }}>
            <div className="header_content" style={{ height: "100%" }}>
                <div className="d-flex justify-content-around align-items-center gap-3" style={{ height: "100%" }}>
                    <img src="https://consumersiteimages.trustpilot.net/business-units/5fa97f4e91811d0001e0add7-198x149-1x.jpg" alt="" className="" style={{ width: "4%" }} />
                    <h3 style={{ color: "white" }}>MOVIE APP</h3>
                    <div className="header_content d-flex align-items-center gap-2" style={{ height: "100%", color: "white" }}>
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>


    )

}