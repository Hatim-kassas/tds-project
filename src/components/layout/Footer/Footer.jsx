import React from 'react'
import visaImg from '../../../../public/images/payment/visa.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* About Section */}
        <div className="footer-section about">
          <h4>About TriadDevs</h4>
          <p>TriadDevs specializes in Full-Stack Development, Secure Code, and Cloud Solutions. Our mission is to deliver cutting-edge development services with a strong focus on security and innovation.</p>
        </div>

        {/* Services Section */}
        <div className="footer-section service">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Full-Stack Development</a></li>
            <li><a href="#">Secure Code Practices</a></li>
            <li><a href="#">Cloud Migration Services</a></li>
            <li><a href="#">AI Integration</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:contact@triadevs.com">contact@triaddevs.com</a></p>
          <p>Support: <a href="mailto:contact@triadevs.com">support@triaddevs.com</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section follow">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <img src="/images/social/insta.png" width="24" height="24" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/triaddevs" target="_blank" rel="noopener noreferrer" className="social-btn">
              <img src="/images/social/in.png" width="24" height="24" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">General Conditions</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Anti-Abuse Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment-section">
        <h4>Secure Payments</h4>
        <p>We accept secure payments through trusted providers:</p>
        <div className="payment-icons">
          <img src="/images/payment/stripe.png" alt="Pay securely using Stripe" />
          <img src="/images/payment/paypal.png" alt="Pay securely using PayPal" />
          <img src={visaImg} alt="Pay securely using VISA" />
          <img src="/images/payment/mastercard.png" alt="Pay securely using Mastercard" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 TriadDevs. All rights reserved.</p>
      </div>
    </footer>
  )
}
