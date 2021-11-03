import React from 'react'

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" id="site-title" href="/">ERL Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <nav className="collapse navbar-collapse me-auto justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
