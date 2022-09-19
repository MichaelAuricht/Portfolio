import { useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../Home/Logo'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Picture from '../Home/Photo'


const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <>
    <Picture />
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '.']}
              idx={15}
            />
          </h1>
          <p>
            I'm a full stack web developer experienced with a wide range of the
            latest technologies.
          </p>
          <p>
            I'm hard-working, dedicated and aim to improve my tech abilities
            each and every day.
          </p>
          <p>
            I'm 33 years old living in the outer suburbs of Melbourne with my
            wife and two kids. I have experience in esports as a coach and desk
            talent on broadcasts in international tournaments.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Logo />
    </>
  )
}

export default About
