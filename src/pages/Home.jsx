import React, { useEffect } from 'react'

const Home = () => {
    const root = document.getElementById('root');

    useEffect(() => {
        const newImageUrl = require(`../assets/home/background-home-desktop.jpg`);

        if (root) {
            root.setAttribute('style', `background-image: url(${newImageUrl})`);
        }

    }, [root]);
    return (
        <div className='home' >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-7 ">
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h1>SPACE</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="col-sm-12 col-md-5  d-flex align-items-end justify-content-center ">
                        <div className="round">
                            <h2 className='m-0' >EXPLORE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home