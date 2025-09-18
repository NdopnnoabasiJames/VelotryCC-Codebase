import React, { useState } from 'react';
import { COLORS } from '../styles/colors';
import Form from '../components/Form';
import api from '../utils/api';

const Register: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await api.post('/auth/register', form);
      setMessage('Registration successful! Awaiting admin approval.');
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Registration failed.');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%', borderRadius: '15px', border: 'none' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4" style={{ color: COLORS.deepNavy, fontWeight: 'bold' }}>Join the Cycling Club</h2>
          <Form title="Sign Up" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: COLORS.darkCharcoal }}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '8px', border: `1px solid ${COLORS.coolLightBlue}` }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: COLORS.darkCharcoal }}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '8px', border: `1px solid ${COLORS.coolLightBlue}` }}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label" style={{ color: COLORS.darkCharcoal }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '8px', border: `1px solid ${COLORS.coolLightBlue}` }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading} style={{ borderRadius: '8px', fontWeight: 'bold' }}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </Form>
          {message && (
            <div className="mt-3 text-center" style={{ color: message.includes('successful') ? COLORS.primaryGreen : COLORS.warmCoral, fontWeight: 'bold' }}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

