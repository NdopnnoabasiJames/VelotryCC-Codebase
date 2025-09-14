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
    <div className="container mt-5" style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ color: COLORS.primaryGreen }}>Register</h2>
      <Form title="Sign Up" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </Form>
      {message && (
        <div className="mt-3" style={{ color: message.includes('successful') ? COLORS.primaryGreen : COLORS.warmCoral }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;

