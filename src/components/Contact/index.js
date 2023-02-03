import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import Logo from '../Home/Logo'

const Contact = () => {

    const [letterClass] = useState('text-animate')


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', '.']} 
                    idx={15}
                    />
                </h1>
                <p>
                    Feel free to contact me about anything via my email mikeauricht@gmail.com
                </p>
            </div>
        </div>
        <Logo />
        </>
    )
}

export default Contact