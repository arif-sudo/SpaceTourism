import React from 'react'
import { Link } from 'react-router-dom'
import star from '../assets/home/star.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg  fixed-top navbaractive">
            <div className="my-container">
                <Link className="navbar-brand" to="/">
                    <img src={star} alt="" className="img-fluid" />
                </Link>
                <div className="header-line mx-auto"></div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>
                    A
                </button> */}
                <div className="collapse navbar-collapse header-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto nav-item-parent">
                        <Link className='nav-item' to="/"
                            onMouseEnter={(e) => e.target.classList.add("item-active")}
                            onMouseLeave={(e) => e.target.classList.remove("item-active")}
                        >00 HOME</Link>
                        <Link className='nav-item' to="/destination"
                            onMouseEnter={(e) => e.target.classList.add("item-active")}
                            onMouseLeave={(e) => e.target.classList.remove("item-active")}
                        >01 DESTINATION</Link>
                        <Link className='nav-item' to="/crew"
                            onMouseEnter={(e) => e.target.classList.add("item-active")}
                            onMouseLeave={(e) => e.target.classList.remove("item-active")}
                        >02 CREW</Link>
                        <Link className='nav-item' to="/technology"
                            onMouseEnter={(e) => e.target.classList.add("item-active")}
                            onMouseLeave={(e) => e.target.classList.remove("item-active")}

                        >03 TECHNOLOGY</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header