import React from 'react'
import data from '../data.json'
import img1 from '../assets/crew/image-douglas-hurley.png'
import img2 from '../assets/crew/image-anousheh-ansari.png'
import img3 from '../assets/crew/image-victor-glover.png'
import img4 from '../assets/crew/image-mark-shuttleworth.png'

const Crew = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const root = document.getElementById('root');
    const images = [img1, img2, img3, img4]

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            const newIndex = (prevIndex + n + images.length) % images.length;
            return newIndex;
        }
        )
    };

    React.useEffect(() => {
        const newImageUrl = require(`../assets/crew/background-crew-desktop.jpg`);
        console.log(images)
        if (root) {
            root.setAttribute('style', `background-image: url(${newImageUrl})`);
        }

    }, [root]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1);
        }, 5000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, []); // Run this effect only once on mount

    return (
        <div className="crew">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex flex-column justify-content-start ">
                        <div className='crew-header' >
                            <span>02</span>
                            <h3>Meet your Crew</h3>
                        </div>
                        <div className="slideshow-container">
                            <div className="slide-content-right">
                                {data.crew.map((e, index) => (
                                    <div key={index} className={`slide ${index === slideIndex ? 'active' : ''}`}>
                                        <h3>{e.role}</h3>
                                        <h1>{e.name}</h1>
                                        <p>{e.bio}</p>

                                    </div>
                                ))}
                            </div>
                            <div className="controls">
                                <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                                <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="left">
                            {images.map((image, index) => (
                                <div key={index} className={`slide ${index === slideIndex ? 'active' : ''}`}>
                                    <img src={image} alt="error" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slideshow-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew