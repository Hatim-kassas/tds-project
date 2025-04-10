import '/images/Logo/logo_1.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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
            setMobileMenuOpen(false); // Close mobile menu after clicking
        }
    };
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <header className={scroll ? 'navbar-container scrolled' : 'navbar-container'}>
            <div className="logo">
                <Link to='/'>
                    <img src="/images/Logo/logo_1.png" alt="logo" />
                </Link>
            </div>
            
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
                <ul className="navbar-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                    </li>

                    <li className={`nav-item dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
                        <span 
                            className="nav-link" 
                            onClick={() => toggleDropdown(0)}
                        >
                            FULL-STACK
                        </span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link 
                                    to="/Web_Development" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Mobile_Development" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Mobile Development
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={`nav-item dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
                        <span 
                            className="nav-link" 
                            onClick={() => toggleDropdown(1)}
                        >
                            OUR SERVICES
                        </span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link 
                                    to="/Secure_Coding" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Secure Coding
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/AI_Integration" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    AI Integration
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Cloud_Solutions" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Cloud Solutions
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={`nav-item dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
                        <span 
                            className="nav-link" 
                            onClick={() => toggleDropdown(2)}
                        >
                            CLOUD HOSTING
                        </span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link 
                                    to="/Cloud_Migration" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Cloud Migration
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/SSL_Certificates" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    SSL Certificates
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Domain" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Domain
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/Performance_Testing" 
                                    className="dropdown-link" 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Performance Testing
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('process');
                                setMobileMenuOpen(false);
                            }} 
                            className="nav-link"
                        >
                            PROCESS
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link  
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('faq');
                                setMobileMenuOpen(false);
                            }} 
                            className="nav-link"
                        >
                            FAQ
                        </Link>
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