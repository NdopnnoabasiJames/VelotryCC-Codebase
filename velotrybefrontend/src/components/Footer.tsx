import React from 'react';
import { COLORS } from '../styles/colors';

const Footer: React.FC = () => (
  <footer
    className="text-center py-3 mt-5"
    style={{ backgroundColor: COLORS.deepNavy }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-md-start mb-2 mb-md-0">
          <span style={{ color: COLORS.softGray }}>&copy; {new Date().getFullYear()} Cycling Club Platform</span>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" style={{ color: COLORS.primaryGreen }} className="me-3">Home</a>
          <a href="#about" style={{ color: COLORS.softGray }} className="me-3">About</a>
          <a href="/rides" style={{ color: COLORS.softGray }} className="me-3">Rides</a>
          <a href="#donate" style={{ color: COLORS.sunnyYellow }} className="me-3">Donate</a>
          <a href="#community" style={{ color: COLORS.softGray }}>Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
