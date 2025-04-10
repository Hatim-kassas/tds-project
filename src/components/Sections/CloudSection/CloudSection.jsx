import React from 'react'
import { Link } from 'react-router-dom'
import './CloudSection.css'

export default function CloudSection() {
    return (
        <section id="cloud" className="cloud-section">
            <div className="cloud-content">
                <div className="notification">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                        <path d="M12 18V6"></path>
                    </svg>
                    <span className="text">Cloud prices vary based on provider, service, usage, and additional features.</span>
                </div>
                <h1>Seamless Cloud Migration</h1>
                <p>
                    We make it easy to migrate your systems from on-premises servers to the cloud. Choose your preferred solution: GCP, AWS, Cloudflare, or Azure.
                    Our experts ensure a smooth and secure transition tailored to your needs.
                </p>
                <div className="cloud-icons">
                    <div className="icon-wrapper">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                            alt="AWS Logo"
                            title="AWS"
                        />
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src="/images/icons/gcp.png"
                            alt="GCP Logo"
                            title="Google Cloud"
                        />
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src="/images/icons/azure.png"
                            alt="Azure Logo"
                            title="Azure"
                        />
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src="/images/icons/oracle.png"
                            alt="Oracle Logo"
                            title="Oracle"
                        />
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src="/images/icons/cloudflare.png"
                            alt="Cloudflare Logo"
                            title="Cloudflare"
                        />
                    </div>
                </div>

                <Link to="/Cloud_Solutions" className="boton-elegante">
                    Explore
                </Link>
            </div>
        </section>
    )
}
