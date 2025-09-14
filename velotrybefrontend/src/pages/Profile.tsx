import React from 'react';
import { COLORS } from '../styles/colors';

const Profile: React.FC = () => (
  <div
    className="container mt-5"
    style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}
  >
    <h2 style={{ color: COLORS.deepNavy }}>Profile</h2>
    {/* User profile info will go here */}
  </div>
);

export default Profile;
