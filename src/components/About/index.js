// Write your code here

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <div className={isDarkTheme ? 'about-dark-bg' : 'about-bg'}>
            <div className="con">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
                className="image"
                alt="about"
              />
              <h1
                className={
                  isDarkTheme ? 'heading light-heading' : 'heading dark-heading'
                }
              >
                About
              </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
