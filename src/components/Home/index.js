// Write your code here

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <div className={isDarkTheme ? 'home-dark-bg' : 'home-bg'}>
            <div className="con">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
                className="image"
                alt="home"
              />
              <h1
                className={
                  isDarkTheme ? 'heading light-heading' : 'heading dark-heading'
                }
              >
                Home
              </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
