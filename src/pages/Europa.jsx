import React from 'react'
import { Link } from 'react-router-dom';
import europa from '../assets/destination/image-europa.png'

const Europa = () => {
    const root = document.getElementById('root');

    React.useEffect(() => {
        const newImageUrl = require(`../assets/destination/background-destination-desktop.jpg`);

        if (root) {
            root.setAttribute('style', `background-image: url(${newImageUrl})`);
        }

    }, [root]);
    return (
        <div className='destination'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <div className='destination-header' >
              <span>01</span>
              <h3>Pick your destination</h3>
            </div>
            <img src={europa} alt="europa" />
          </div>
          <div className="col-sm-12 col-md-5 d-flex flex-column justify-content-start ">
            <nav className="navbar navbar-expand-lg  destination-nav ">
              <ul className="navbar-nav nav-link-parent">
                <Link className="nav-link" to="/destination"
                  onMouseEnter={(e) => {
                    e.target.classList.add("dest-item-active")
                    e.target.nextElementSibling?.classList.remove('dest-item-active');
                  }}
                  onMouseLeave={(e) => e.target.classList.remove("dest-item-active")}

                >MOON</Link>
                <Link className="nav-link dest-item-active" to="/destination/mars"
                  onMouseEnter={(e) => e.target.classList.add("dest-item-active")
                  }>MARS</Link>
                <Link className="nav-link" to="/destination/europa"
                  onMouseEnter={(e) => {
                    e.target.classList.add("dest-item-active")
                    e.target.previousElementSibling?.classList.remove('dest-item-active');
                  }
                  }
                  onMouseLeave={(e) => {
                    e.target.classList.remove("dest-item-active")
                  }}>EUROPA</Link>
                <Link className="nav-link" to='/destination/titan'
                  onMouseEnter={(e) => e.target.classList.add("dest-item-active")}
                  onMouseLeave={(e) => e.target.classList.remove("dest-item-active")}>TITAN</Link>
              </ul>
            </nav>
            <h1>EUROPA</h1>
            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <div className="dest-line"></div>
            <div className='row dest-bottom '>
              <div className="col-6">
                <p>AVG. DISTANCE</p>
                <h4>628 MIL. km</h4>
              </div>
              <div className="col-6">
                <p>Est. travel time</p>
                <h4>3 years</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    )
}

export default Europa