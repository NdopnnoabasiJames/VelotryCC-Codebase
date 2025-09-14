import React from 'react';
import { COLORS } from '../styles/colors';

interface RideCardProps {
  date: string;
  location: string;
  distance: string;
  leader: string;
}

const RideCard: React.FC<RideCardProps> = ({ date, location, distance, leader }) => (
  <div
    style={{
      background: COLORS.softGray,
      border: `2px solid ${COLORS.primaryGreen}`,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}
  >
    <h4 style={{ color: COLORS.primaryGreen }}>{location}</h4>
    <p style={{ color: COLORS.deepNavy }}><strong>Date:</strong> {date}</p>
    <p style={{ color: COLORS.deepNavy }}><strong>Distance:</strong> {distance}</p>
    <p style={{ color: COLORS.sunnyYellow }}><strong>Leader:</strong> {leader}</p>
  </div>
);

export default RideCard;
