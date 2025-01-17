import { useEffect, useState } from 'react'
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
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Cloud Infrasturcture Specialist looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a bikes fanatic,
            traveller, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
