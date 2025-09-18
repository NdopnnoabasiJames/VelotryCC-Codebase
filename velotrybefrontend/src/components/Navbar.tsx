
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/colors';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: COLORS.deepNavy, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
    >
  <div className="container d-flex justify-content-between align-items-center p-3 m-0" style={{ minHeight: 64, paddingLeft: 0, paddingRight: 0 }}>
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ minWidth: 0, padding: 0, marginLeft: 0 }}>
          <img src={logo} alt="Velotrybe logo" style={{ height: 40, marginRight: 6, objectFit: 'contain' }} />
          <span className="d-none d-sm-inline" style={{ fontSize: '1.15rem', fontWeight: 700, color: COLORS.white, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>VELOTRYBE Cycling Club</span>
          <span className="d-inline d-sm-none" style={{ fontSize: '1.15rem', fontWeight: 700, color: COLORS.white, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>VELOTRYBE</span>
        </Link>
        <button
          className={`navbar-toggler d-lg-none ${menuOpen ? 'open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          style={{ border: 'none', background: 'transparent', color: COLORS.white }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''} d-lg-flex`} style={{ marginRight: 0 }}>
          <ul className="navbar-nav ms-auto mb-0 d-lg-flex flex-lg-row gap-lg-2 text-center" style={{ marginRight: 0 }}>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/rides" style={{ color: COLORS.sunnyYellow, fontWeight: 500 }} onClick={() => setMenuOpen(false)}>
                Rides
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/login" style={{ color: COLORS.primaryGreen, fontWeight: 500 }} onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/register" style={{ color: COLORS.primaryGreen, fontWeight: 500 }} onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
