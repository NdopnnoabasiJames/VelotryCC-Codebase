import React from 'react';
import { COLORS } from '../styles/colors';
import logoUrl from '../assets/Logo.jpg';
import picOne from '../assets/Picone.jpg';
import picTwo from '../assets/Pictwo.jpg';
import picThree from '../assets/picthree.jpg';
import picFour from '../assets/Picfour.jpg';
import picFive from '../assets/picfive.jpg';

const Home: React.FC = () => {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
      {/* Hero */}
      <section
        id="hero"
        className="position-relative"
        style={{
          height: '420px',
          background: 'none',
          marginTop: '64px',
        }}
      >
        {/* Mobile: background image with overlay and centered text */}
  <div className="d-block d-md-none position-relative w-100 h-100" style={{ height: '420px', backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.6) 0%, rgba(111,169,220,0.3) 100%), url(${logoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: COLORS.white }}>
          <div className="container position-relative" style={{ zIndex: 2, height: '100%' }}>
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 text-center py-5">
                <h1 className="mb-3 fw-bold" style={{ fontSize: '2.2rem', letterSpacing: '1px', color: COLORS.white, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>VELOTRYBE</h1>
                <p className="lead mb-4" style={{ color: COLORS.white, fontWeight: 500, fontSize: '1.1rem', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                  Ride together. Grow stronger. Support our community.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
                  <a href="#join" className="btn btn-primary btn-lg shadow">Join the Club</a>
                  <a href="#rides" className="btn btn-secondary btn-lg shadow">Upcoming Rides</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop/tablet: split layout with text left and image right */}
        <div className="container d-none d-md-block h-100" style={{ height: '420px', backgroundColor: COLORS.deepNavy }}>
          <div className="row align-items-center h-100">
            <div className="col-md-7">
              <h1 className="text-start mb-3 fw-bold" style={{ fontSize: '2.7rem', letterSpacing: '1px', color: COLORS.white, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>VELOTRYBE Cycling Club</h1>
              <p className="mb-4" style={{ color: COLORS.white, fontWeight: 500, fontSize: '1.25rem', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                Ride together. Grow stronger. Support our community.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-start mt-3">
                <a href="#join" className="btn btn-primary btn-lg shadow">Join the Club</a>
                <a href="#rides" className="btn btn-secondary btn-lg shadow">Upcoming Rides</a>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src={logoUrl} alt="Group ride" style={{ borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.4)', width: '100%', maxWidth: '350px', height: '300px', objectFit: 'cover', margin: '0 auto' }} />
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-5" style={{ backgroundColor: COLORS.softGray }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 style={{ color: COLORS.deepNavy }}>About Our Club</h2>
              <p style={{ color: COLORS.darkCharcoal }}>
                We are a community-driven cycling club that organizes weekly rides, training, and outreach programs. Our mission is to make cycling accessible, safe, and fun for riders of all abilities.
              </p>
              <p style={{ color: COLORS.darkCharcoal }}>
                Join us to discover new routes, develop your skills, and contribute to community initiatives that support health and environmental sustainability.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src={picTwo} alt="Cyclists" className="img-fluid rounded" style={{ width: '650%', height: '40%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* NGO / Donate */}
      <section id="donate" className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container text-center">
          <h2 style={{ color: COLORS.primaryGreen }}>We are an NGO</h2>
          <p style={{ color: COLORS.darkCharcoal, maxWidth: 800, margin: '0 auto' }}>
            As a registered NGO, we support community programs, youth outreach and safe cycling education. Your donations help us maintain equipment, run workshops and fund local events.
          </p>
          <div className="mt-3">
            <a href="#" className="btn btn-lg" style={{ backgroundColor: COLORS.warmCoral, color: '#fff' }}>Donate Now</a>
          </div>
        </div>
      </section>

      {/* Social / Community */}
      <section id="community" className="py-5" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container text-center">
          <h3 style={{ color: COLORS.deepNavy }}>Join our community</h3>
          <p style={{ color: COLORS.darkCharcoal }}>Connect with us on social media and stay up to date with events.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="WhatsApp"><i className="fab fa-whatsapp fa-lg" style={{ color: 'green' }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="Instagram"><i className="fab fa-instagram fa-lg" style={{ color: '#C13584' }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="Facebook"><i className="fab fa-facebook fa-lg" style={{ color: '#1877F2' }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="YouTube"><i className="fab fa-youtube fa-lg" style={{ color: '#FF0000' }}></i></a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section id="join" className="py-4 text-center" style={{ backgroundColor: COLORS.deepNavy }}>
        <div className="container">
          <h4 style={{ color: COLORS.softGray }}>Ready to ride with us?</h4>
          <a href="/register" className="btn btn-lg mt-3" style={{ backgroundColor: COLORS.primaryGreen, color: '#fff' }}>Become a Member</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
