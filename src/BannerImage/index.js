import React, { Component } from 'react'
import './style.css'

import ThreeComputerBannerImage from '../assets/ThreeComputerBannerImage.png'


class BannerImage extends Component {
  render () {
    return (
      <div className='three-computer-image-div' id='banner-image'>
          <img src={ThreeComputerBannerImage} alt='' className='three-computer-banner-image' />
      </div>
    )
  }
}

export default BannerImage
