import React from 'react'

const Navbar = () => {
    return (
        <header className="py-3 mb-4 bg-white shadow-sm">
            <div className="container d-flex flex-wrap justify-content-center ">
                <span className="nav-link d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4 fw-bold">Abutech</span>
                </span>

                <ul className="nav nav-pills">
                    <li className="nav-item"><span className="nav-link active " aria-current="page">Register</span></li>
                    <li className="nav-item"><span className="nav-link ">Sign in</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar