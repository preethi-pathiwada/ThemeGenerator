// Write your code here

import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      if (!isDarkTheme) {
        return (
          <>
            <Navbar />
            <div className="home-bg">
              <div className="con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="image"
                  alt="home"
                />
                <h1 className="heading dark-heading">Home</h1>
              </div>
            </div>
          </>
        )
      }
      return (
        <>
          <Navbar />
          <div className="home-dark-bg">
            <div className="con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                className="image"
                alt="home"
              />
              <h1 className="heading light-heading">Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
