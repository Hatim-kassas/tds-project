
import '/images/Logo/logo_1.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const changeBgScroll = () => {
            if(window.scrollY >= 10) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', changeBgScroll)
        
        return () => {
            window.removeEventListener('scroll', changeBgScroll);
        };

    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Adjust offset for navbar height
                behavior: 'smooth'
            });
        }
    };
    

    return (
        <header className={scroll ? 'navbar-container scrolled' : 'navbar-container'}>
            <div className="logo">
                <Link to='/'>
                    <img src="/images/Logo/logo_1.png" alt="logo" />
                </Link>
            </div>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <span className="nav-link">FULL-STACK</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Web_Development" className="dropdown-link">Web Development</Link>
                            </li>
                            <li>
                                <Link to="/Mobile_Development" className="dropdown-link">Mobile Development</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <span className="nav-link">OUR SERVICES</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Secure_Coding" className="dropdown-link">Secure Coding</Link>
                            </li>
                            <li>
                                <Link to="/AI_Integration" className="dropdown-link">AI Integration</Link>
                            </li>
                            <li>
                                <Link to="/Cloud_Solutions" className="dropdown-link">Cloud Solutions</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <span className="nav-link">CLOUD HOSTING</span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Cloud_Migration" className="dropdown-link">Cloud Migration</Link>
                            </li>
                            <li>
                                <Link to="/SSL_Certificates" className="dropdown-link">SSL Certificates</Link>
                            </li>
                            <li>
                                <Link to="/Domain" className="dropdown-link">Domain</Link>
                            </li>
                            <li>
                                <Link to="/Performance_Testing" className="dropdown-link">Performance Testing</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('process');
                        }} className="nav-link">PROCESS</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link  onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('faq');
                        }} className="nav-link">FAQ</Link>
                    </li>
                </ul>
            </nav>
            <div className="action-buttons">
                <a
                    href="https://triaddevs.fillout.com/schedule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meet-btn"
                >
                    Schedule a Call
                </a>
            </div>
        </header>
    );
}