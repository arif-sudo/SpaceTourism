import React, { useEffect } from 'react'
import '../assets/destination/background-destination-desktop.jpg'

const Destination = () => {
  const root = document.getElementById('root');

  useEffect(() => {
    const newImageUrl = require(`../assets/destination/background-destination-desktop.jpg`);

    if (root) {
      root.setAttribute('style', `background-image: url(${newImageUrl})`);
    }

  }, [root]);


  return (
    <div>Destination</div>
  )
}

export default Destination