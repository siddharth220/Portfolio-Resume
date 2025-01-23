import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setletterClass('text-animate-hover')
        }, 4000);
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'About Me'.split('')}
                    idx={15}/>
                </h1>
                <p>I'm an Electronics and Communication Engineering graduate with a passion for information technology. Proficient in Java, Python, Lua, SQL, HTML, CSS, JavaScript, React, Node.js, and MongoDB, I'm well-prepared for diverse IT challenges.</p>
                <p>I thrive in dynamic environments, driven by innovation and quick problem-solving. With a strong work ethic and commitment to excellence, I'm dedicated to delivering efficient and innovative IT solutions.</p>
                <p>My adaptability and enthusiasm make me an asset to the IT sector, where every challenge presents an opportunity for innovation.</p>
            </div>
            <div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#61DBFB'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#E34C26'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#2565AE'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#F0DB4F'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color='#F14C4D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faNodeJs} color='#3C873A'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About;