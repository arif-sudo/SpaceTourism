import React, { useEffect } from 'react'

const Technology = () => {
    const root = document.getElementById('root');
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
                        <span>02</span>
                        <h3>Meet your Crew</h3>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}

export default Technology