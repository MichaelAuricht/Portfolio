import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Picture from './Photo'

const Home = () => {
  const [letterClass] = useState('text-animate')

  const nameArray = [' ', 'M', 'i', 'c', 'h', 'a', 'e', 'l']
  const surnameArray = ['A', 'u', 'r', 'i', 'c', 'h', 't', '.']

  return (
    <>
    <Picture />
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m </span>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={surnameArray} idx={23} />
        </h1>
        <h2>
            Fullstack Web Developer - mikeauricht@gmail.com
        </h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
    <Logo />
    </>
  );
}

export default Home;
