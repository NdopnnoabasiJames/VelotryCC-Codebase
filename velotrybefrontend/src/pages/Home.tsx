import React from 'react';
import { COLORS } from '../styles/colors';
import logo from '../assets/WhatsApp Image 2025-09-14 at 22.49.41_35fe03be.jpg';

const Home: React.FC = () => {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
      {/* Hero */}
      <section
        id="hero"
        className="py-3"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1600x600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: COLORS.white,
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="d-block d-md-none mb-3">
                <img src={logo} alt="Velotrybe logo" style={{ maxHeight: 80, objectFit: 'contain' }} />
              </div>
              <h1 style={{ fontSize: '3rem', color: COLORS.white, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Cycling Club</h1>
              <p style={{ fontSize: '1.25rem', color: COLORS.white, opacity: 0.95 }}>Ride together. Grow stronger. Support our community.</p>
              <div className="mt-4">
                <a href="#join" className="btn btn-primary btn-lg me-3">Join the Club</a>
                <a href="#rides" className="btn btn-secondary btn-lg">Upcoming Rides</a>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <img src={logo} alt="Group ride" style={{ borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.4)', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-5" style={{ backgroundColor: COLORS.softGray }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ color: COLORS.deepNavy }}>About Our Club</h2>
              <p style={{ color: COLORS.darkCharcoal }}>
                We are a community-driven cycling club that organizes weekly rides, training, and outreach programs. Our mission is to make cycling accessible, safe, and fun for riders of all abilities.
              </p>
              <p style={{ color: COLORS.darkCharcoal }}>
                Join us to discover new routes, develop your skills, and contribute to community initiatives that support health and environmental sustainability.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="https://via.placeholder.com/600x400" alt="Cyclists" className="img-fluid rounded" />
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
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="WhatsApp"><i className="fab fa-whatsapp fa-lg" style={{ color: COLORS.primaryGreen }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="Instagram"><i className="fab fa-instagram fa-lg" style={{ color: '#C13584' }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="Facebook"><i className="fab fa-facebook fa-lg" style={{ color: '#1877F2' }}></i></a>
            <a href="#" className="btn btn-light p-3 rounded-circle" aria-label="Twitter"><i className="fab fa-twitter fa-lg" style={{ color: '#1DA1F2' }}></i></a>
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
