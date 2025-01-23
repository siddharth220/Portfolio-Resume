import Loader from 'react-loaders';
import './index.scss'
import { React, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    console.log(portfolioData)

    useEffect(() => {
        const timer = setTimeout(() => {
          return setletterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const renderPortfolio = (data) => {
        return (
            <div className='images-container'>
                {
                    data.portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover}
                                className='portfolio-image'
                                alt="portfolio" />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='button' onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    return (
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters letterClass={letterClass}
                strArray={'Portfolio'.split('')}
                idx={15}/>
            </h1>
            <div>{renderPortfolio(portfolioData)}</div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Portfolio;