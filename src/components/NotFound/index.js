// Write your code here

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <div className={isDarkTheme ? 'not-found-dark-bg' : 'not-found-bg'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1
              className={
                isDarkTheme
                  ? 'lost-heading light-lost-heading'
                  : 'lost-heading dark-lost-heading'
              }
            >
              Lost your way?
            </h1>
            <p
              className={
                isDarkTheme
                  ? 'lost-para light-lost-para'
                  : 'lost-para dark-lost-para'
              }
            >
              We cannot seem to find the page you're looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
