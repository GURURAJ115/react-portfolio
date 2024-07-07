import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import {
  faLinux,
  // faCss3,
  faGitAlt,
  // faHtml5,
  // faInfinity,
  // faReact,
  faAws,
  faDocker,
  faRedhat,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['G', 'u', 'r', 'u', 'r', 'a', 'j']
  const jobArray = [
    'D',
    'e',
    'v',
    'O',
    'p',
    's',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <span className={`${letterClass} _14`}></span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Cloud Infrasturcture Specialist / Back End Developer / Youtuber </h2>
          <br/>
          <Link to="/learn" className="flat-button">
            LEARN 
          </Link>
        </div>
        <Logo />
      </div>
      <div className="stage-cube-cont">
      <br/>
      <br/>
      <br/>
      <br/>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} color="black" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="black" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faRedhat} color="red" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faInfinity} color="blue" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
