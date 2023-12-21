import React from 'react'
import { Link } from 'react-router-dom';
import mars from '../assets/destination/image-mars.png'

const Mars = () => {
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
          <div className="col-sm-12 col-md-6 ">
            <div className='destination-header' >
              <span>01</span>
              <h3>Pick your destination</h3>
            </div>
            <img src={mars} alt="mars" />
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
            <h1>MARS</h1>
            <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            <div className="dest-line"></div>
            <div className='row dest-bottom '>
              <div className="col-6">
                <p>AVG. DISTANCE</p>
                <h4>225 MIL. km</h4>
              </div>
              <div className="col-6">
                <p>Est. travel time</p>
                <h4>9 months</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Mars