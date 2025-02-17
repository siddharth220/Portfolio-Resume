import "./index.scss";
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        return setletterClass('text-animate-hover')
      }, 4000);
    }, [])
    

    return (
      <>
      <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArray={'iddharth'.split('')}
            idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={'Engineering Graduate'.split('')}
            idx={15}/>
            </h1>
            <h2>Frontend Developer / Java Developer</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo/>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
      </>
    );
}

export default Home;