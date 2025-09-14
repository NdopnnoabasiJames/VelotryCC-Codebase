import React, { useState } from 'react';
import { COLORS } from '../styles/colors';
import Form from '../components/Form';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
  const res = await api.post<{ user: any }>('/auth/login', form);
  login(res.data.user);
  setMessage('Login successful!');
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Login failed.');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ color: COLORS.deepNavy }}>Login</h2>
      <Form title="Sign In" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
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

export default Login;
