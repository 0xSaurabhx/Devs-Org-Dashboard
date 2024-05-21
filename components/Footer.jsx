import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
    © 2024 by <a href="https://devs.org.in">Dev's Org</a>
    </p>
  </footer>
);

export default Footer;
