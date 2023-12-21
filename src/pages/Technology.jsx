import React, { useEffect } from 'react'
import data from '../data.json'
import img1 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import img2 from '../assets/technology/image-spaceport-portrait.jpg'
import img3 from '../assets/technology/image-space-capsule-portrait.jpg'

const Technology = () => {
    const root = document.getElementById('root');
    const [techIndex, setTechIndex] = React.useState(0);
    // const [active, setActive] = useState(false);

    const images = [img1, img2, img3];

    // const handleClick = () => {}
    const handleClick = (n) => {
        setTechIndex(n);
    }
    useEffect(() => {
        const newImageUrl = require(`../assets/technology/background-technology-desktop.jpg`);
        if (root) {
            root.setAttribute('style', `background-image: url(${newImageUrl})`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [root]);

    return (
        <div className="technology">
            <div className="container">
                <div className="row">
                    <div className='technology-header' >
                        <span>03</span>
                        <h3>Technology</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 tech-col">
                        <div className="tech-buttons">
                            <div className='tbtn tech-active-btn' onClick={(e) => {
                                handleClick(0);
                                e.target.classList.add('tech-active-btn');
                                e.target.nextElementSibling?.classList.remove('tech-active-btn');
                                e.target.nextElementSibling?.nextElementSibling?.classList.remove('tech-active-btn');

                            }} >
                                <h1 style={{ pointerEvents: 'none' }} >1</h1>
                            </div>
                            <div className='tbtn' onClick={(e) => {
                                handleClick(1);
                                e.target.classList.add('tech-active-btn');
                                e.target.nextElementSibling?.classList.remove('tech-active-btn');
                                e.target.previousElementSibling?.classList.remove('tech-active-btn');
                            }} >
                                <h1 style={{ pointerEvents: 'none' }}>2</h1>
                            </div>
                            <div className='tbtn' onClick={(e) => {
                                handleClick(2);
                                e.target.classList.add('tech-active-btn');
                                e.target.previousElementSibling?.classList.remove('tech-active-btn');
                                e.target.previousElementSibling?.previousElementSibling?.classList.remove('tech-active-btn');
                                }} >
                                <h1 style={{ pointerEvents: 'none' }}>3</h1>
                            </div>
                        </div>
                        <div className='tech-headline' >
                            <span>THE TERMINOLOGY…</span>
                            {data.technology.map((element, index) => (
                                <div key={index} className={`tech-slide ${index === techIndex ? 'active' : ''}`} >
                                    <h1>{element.name}</h1>
                                    <p>{element.description}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-5">
                        {images.map((element, index) => (
                            <div key={index} className={`tech-slide ${index === techIndex ? 'active' : ''}`} >
                                <img src={element} alt="error" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology