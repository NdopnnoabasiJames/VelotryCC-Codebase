import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/colors';
import logo from '../assets/WhatsApp Image 2025-09-14 at 22.49.41_35fe03be.jpg';

const Navbar: React.FC = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{ backgroundColor: COLORS.deepNavy }}
  >
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Velotrybe logo" style={{ height: 48, marginRight: 12, objectFit: 'contain' }} />
        <span style={{ color: COLORS.primaryGreen, fontWeight: 700 }}>Cycling Club</span>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/rides" style={{ color: COLORS.sunnyYellow }}>
              Rides
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" style={{ color: COLORS.primaryGreen }}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register" style={{ color: COLORS.primaryGreen }}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
