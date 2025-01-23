import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { useState } from "react";
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Home, User2, Briefcase, MailPlus, Github, Linkedin, XCircle, Menu } from 'lucide-react';

const Sidebar = () => {
    const [showNav, setshowNav] = useState(false)

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setshowNav(false)}>
                <img src={LogoS} alt='logo'/>
                <img className='sub-logo' src={LogoSubtitle} alt='logo-subtitle'/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/' onClick={() => setshowNav(false)}>
                    <Home color='#fff'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setshowNav(false)}>
                    <User2 color='#fff'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio' onClick={() => setshowNav(false)}>
                    <Briefcase color='#fff'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setshowNav(false)}>
                    <MailPlus color='#fff'/>
                </NavLink>
                <XCircle color="#ffffff" size='3x' className='close-icon'/>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/siddharth-harshit-13146a238/'>
                        <Linkedin className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/siddharth220'>
                        <Github className="anchor-icon"/>
                    </a>
                </li>
            </ul>
            <Menu size='3x' color="#ffffff" className='hamburger-icon'/>
        </div>
    )
}


export default Sidebar;