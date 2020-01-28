import React from 'react'
import heartIcon from "../../images/heart-icon.svg"
import { AboutBlockWrapper } from "./styles";

export const AboutBlock: React.FC = () => {
  return (
    <AboutBlockWrapper>
      <h1>CSS box shadows from around the web 🎉</h1>
      <p>
        In need of a beautiful box shadow for your next project? We have got you covered!
      </p>
      <a href="https://lukebrown.io" target="_blank">
        Made with <img src={heartIcon} alt="love" /> by Luke Brown
      </a>
    </AboutBlockWrapper>
  )
}

export default AboutBlock;