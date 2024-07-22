// Write your code here

import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      
      if (!isDarkTheme) {
        return (
          <>
            <Navbar />
            <div className="not-found-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="not-found-image"
                alt="not found"
              />
              <h1 className="lost-heading dark-lost-heading">Lost your way?</h1>
              <p className="lost-para dark-lost-para">
                We cannot seem to find the page you're looking for
              </p>
            </div>
          </>
        )
      }
      return (
        <>
          <Navbar />
          <div className="not-found-dark-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className="lost-heading light-lost-heading">Lost your way?</h1>
            <p className="lost-para light-lost-para">
              We cannot seem to find the page you're looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
