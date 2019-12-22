import React from 'react'
import heartIcon from "../../images/heart-icon.svg"
import { AboutBlockWrapper } from "./styles";

export const AboutBlock = () => {
  return (
    <AboutBlockWrapper>
      <h1>CSS box shadows for your next project 🎉</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="https://lukebrown.io" target="_blank">
        Made with <img src={heartIcon} alt="love" /> by Luke Brown
      </a>
    </AboutBlockWrapper>
  )
}

export default AboutBlock;