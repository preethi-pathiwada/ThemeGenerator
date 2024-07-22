// Write your code here

import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      if (!isDarkTheme) {
        return (
          <>
            <Navbar />
            <div className="about-bg">
              <div className="con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="image"
                  alt="about"
                />
                <h1 className="heading dark-heading">About</h1>
              </div>
            </div>
          </>
        )
      }
      return (
        <>
          <Navbar />
          <div className="about-dark-bg">
            <div className="con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                className="image"
                alt="about"
              />
              <h1 className="heading light-heading">About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
