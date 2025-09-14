import React from 'react';
import { COLORS } from '../styles/colors';

const Dashboard: React.FC = () => (
  <div
    className="container mt-5"
    style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}
  >
    <h2 style={{ color: COLORS.deepNavy }}>Dashboard</h2>
    {/* Dashboard content for Rider/Admin will go here */}
  </div>
);

export default Dashboard;
