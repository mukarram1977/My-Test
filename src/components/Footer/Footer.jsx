import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        {/* প্রথম কলাম: দোকানের নাম, ঠিকানা, ইমেল, মোবাইল নম্বর */}
        <h3 className="footer-title">Car Repair Shop</h3>
        <p>123 Main Street, Dhaka, Bangladesh</p>
        <p>Email: support@carrepair.com</p>
        <p>Phone: +880 1234 567890</p>
      </div>

      <div className="footer-column">
        {/* দ্বিতীয় কলাম: নেভবার মেনু */}
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        {/* তৃতীয় কলাম: গুগল ম্যাপ ও নিউজলেটার */}
        <h3 className="footer-title">Find Us</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.702011474014!2d90.36923461536547!3d23.756356494555777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a05b4c5a01%3A0x2dddc2f20a09e50d!2sDhaka%20City%20Center!5e0!3m2!1sen!2sbd!4v1634309248427!5m2!1sen!2sbd"
          width="100%"
          height="150"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <h3 className="footer-title">Newsletter</h3>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
