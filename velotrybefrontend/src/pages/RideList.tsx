import React from 'react';
import { COLORS } from '../styles/colors';
import RideCard from '../components/RideCard';

const sampleRides = [
  {
    date: '2025-09-20',
    location: 'Central Park',
    distance: '25 km',
    leader: 'Alice'
  },
  {
    date: '2025-09-27',
    location: 'River Trail',
    distance: '40 km',
    leader: 'Bob'
  },
  {
    date: '2025-10-04',
    location: 'Mountain Loop',
    distance: '60 km',
    leader: 'Carol'
  }
];

const RideList: React.FC = () => (
  <div
    className="container mt-5"
    style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}
  >
    <h2 style={{ color: COLORS.primaryGreen }}>Upcoming Rides</h2>
    {sampleRides.map((ride, idx) => (
      <RideCard key={idx} {...ride} />
    ))}
  </div>
);

export default RideList;
