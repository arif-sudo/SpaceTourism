import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import moon from '../assets/destination/image-moon.png'

const Destination = () => {
  const root = document.getElementById('root');

  useEffect(() => {
    const newImageUrl = require(`../assets/destination/background-destination-desktop.jpg`);

    if (root) {
      root.setAttribute('style', `background-image: url(${newImageUrl})`);
    }

  }, [root]);


  return (
    <div className='destination'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6  ">
            <div className='destination-header' >
              <span>01</span>
              <h3>Pick your destination</h3>
            </div>
            <img src={moon} alt="moon" />
          </div>
          <div className="col-sm-12 col-md-5 d-flex flex-column justify-content-start ">
            <nav className="navbar navbar-expand-lg  destination-nav ">
              <ul className="navbar-nav nav-link-parent">
                <Link className="nav-link dest-item-active" to="/destination"
                  onMouseEnter={(e) => e.target.classList.add("dest-item-active")}
                >MOON</Link>
                <Link className="nav-link" to="/destination/mars"
                  onMouseEnter={(e) => {
                    e.target.classList.add("dest-item-active")
                    e.target.previousElementSibling?.classList.remove('dest-item-active');
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("dest-item-active")

                  }}>MARS</Link>
                <Link className="nav-link" to="/destination/europa"
                  onMouseEnter={(e) => e.target.classList.add("dest-item-active")}
                  onMouseLeave={(e) => e.target.classList.remove("dest-item-active")}>EUROPA</Link>
                <Link className="nav-link" to='/destination/titan'
                  onMouseEnter={(e) => e.target.classList.add("dest-item-active")}
                  onMouseLeave={(e) => e.target.classList.remove("dest-item-active")}>TITAN</Link>
              </ul>
            </nav>
            <h1>MOON</h1>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className="dest-line"></div>
            <div className='row dest-bottom '>
              <div className="col-6">
                <p>AVG. DISTANCE</p>
                <h4>384,400 km</h4>
              </div>
              <div className="col-6">
                <p>Est. travel time</p>
                <h4>3 days</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination