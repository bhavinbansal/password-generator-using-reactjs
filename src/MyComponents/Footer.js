import React from 'react'
import {footerStyle,foosty} from './FooterStyle'
import image1 from './github.png'
import image2 from './linkedin.png'

export const Footer = () => {

  return (
    <>
    <footer style={foosty}>
    Made by Bhavin Bansal
    <a href="https://github.com/bhavinbansal">
          <img src={image1} alt="github"  target="_blank" style={footerStyle}/>
    </a>
    <a href="https://www.linkedin.com/in/bhavinbansal7865/">
          <img src={image2} alt="linkedin"  target="_blank" style={footerStyle} />
    </a>
    </footer>
    </>
  )
}
