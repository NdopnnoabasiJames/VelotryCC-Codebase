import React, { useEffect, useState } from 'react';
import { COLORS } from '../styles/colors';
import logoUrl from '../assets/Logo.jpg';
// import picOne from '../assets/Picone.jpg';
import picTwo from '../assets/Pictwo.jpg';
// import picThree from '../assets/picthree.jpg';
// import picFour from '../assets/Picfour.jpg';
// import picFive from '../assets/picfive.jpg';

const Home: React.FC = () => {
  // Simple typewriter hook/component
  const Typewriter: React.FC<{ text: string; speed?: number; pause?: number; onCycle?: () => void }> = ({ text, speed = 90, pause = 2000, onCycle }) => {
    const [display, setDisplay] = useState('');
    const [running, setRunning] = useState(true);

    // Refs to hold mutable timers and index so closures don't cause races
    const charTimeoutRef = React.useRef<number | null>(null);
    const pauseTimeoutRef = React.useRef<number | null>(null);
    const idxRef = React.useRef(0);

    // Clear any outstanding timers
    const clearTimers = () => {
      if (charTimeoutRef.current) {
        window.clearTimeout(charTimeoutRef.current);
        charTimeoutRef.current = null;
      }
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };

    useEffect(() => {
      let mounted = true;

      const startTyping = () => {
        clearTimers();
        idxRef.current = 0;
        setDisplay('');
        setRunning(true);

        const typeNext = () => {
          if (!mounted) return;
          const i = idxRef.current;
          if (i < text.length) {
            setDisplay((d) => d + text.charAt(i));
            idxRef.current = i + 1;
            charTimeoutRef.current = window.setTimeout(typeNext, speed);
          } else {
            // finished typing
            setRunning(false);
            if (onCycle) {
              try { onCycle(); } catch (e) { /* swallow */ }
            }
            // wait 'pause' ms, then clear and restart
            pauseTimeoutRef.current = window.setTimeout(() => {
              if (!mounted) return;
              setDisplay('');
              setRunning(true);
              // small timeout before starting next cycle to allow UI to update
              pauseTimeoutRef.current = window.setTimeout(() => startTyping(), 120);
            }, pause);
          }
        };

        // start first char
        charTimeoutRef.current = window.setTimeout(typeNext, speed);
      };

      startTyping();

      return () => {
        mounted = false;
        clearTimers();
      };
    }, [text, speed, pause, onCycle]);

    return <span className="typewriter-text">{display}<span className="cursor" style={{ opacity: running ? 1 : 0 }}>|</span></span>;
  };

  // Control hero suffix visibility
  const [suffixVisible, setSuffixVisible] = useState(false);

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
                <h1 className="mb-3 fw-bold" style={{ fontSize: '2.2rem', letterSpacing: '1px', color: COLORS.white, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>
                  <Typewriter text="VELOTRYBE" speed={90} />
                </h1>
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
              <h1 className="text-start mb-3 fw-bold" style={{ fontSize: '2.7rem', letterSpacing: '1px', color: COLORS.white, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>
                <Typewriter text="VELOTRYBE" speed={90} onCycle={() => setSuffixVisible(true)} />
                <span className={`hero-suffix ${suffixVisible ? 'visible' : ''}`} style={{ marginLeft: 8, transition: 'opacity 500ms ease' }}>Cycling Club</span>
              </h1>
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
              <img src={picTwo} alt="Cyclists" className="img-fluid rounded" style={{ width: '100%', maxWidth: '450px', height: 'auto' }} />
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
