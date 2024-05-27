const Navbar = ({ setcategory }) => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">NEWSAPP</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory("technology")
                            }} aria-current="page" href="#">Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory("business")
                            }} aria-current="page" href="#">Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory("health")
                            }} aria-current="page" href="#">Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory("features")
                            }} aria-current="page" href="#">Features</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory("science")
                            }} aria-current="page" href="#">Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => {
                                setcategory(entertainment)
                            }} aria-current="page" href="#">Entertainment</div>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar