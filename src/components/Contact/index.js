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
                    I am interested in any and all opportunities at this time. 
                    However, feel free to contact me about anything using the form below.
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='name' required />                                
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='email' required />                                
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='subject' required />
                            </li>
                            <li>
                                <textarea name='message' placeholder='message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
        </div>
        <Logo />
        </>
    )
}

export default Contact