// Write your code here

import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        console.log('clicked')
        toggleTheme(!isDarkTheme)
      }
      if (!isDarkTheme) {
        return (
          <div className="navbar-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              className="logo"
              alt="website logo"
            />
            <ul className="container">
              <Link to="/" className="link">
                <li className="text dark-text">Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className="text dark-text">About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="button"
              data-testid="theme"
              onClick={changeTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                className="logo"
                alt="theme"
              />
            </button>
          </div>
        )
      }
      return (
        <div className="navbar-dark-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            className="logo"
            alt="website logo"
          />
          <div className="container">
            <Link to="/" className="link">
              <p className="text light-text">Home</p>
            </Link>
            <Link to="/about" className="link">
              <p className="text light-text">About</p>
            </Link>
          </div>
          <button type="button" className="button" onClick={changeTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              className="logo"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
