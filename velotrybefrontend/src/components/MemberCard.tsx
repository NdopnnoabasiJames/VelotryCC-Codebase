import React from 'react';

interface MemberCardProps {
  name: string;
  role: string;
  status: string;
}

import { COLORS } from '../styles/colors';

const MemberCard: React.FC<MemberCardProps> = ({ name, role, status }) => (
  <div
    style={{
      background: COLORS.softGray,
      border: `2px solid ${COLORS.deepNavy}`,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}
  >
    <h4 style={{ color: COLORS.deepNavy }}>{name}</h4>
    <p style={{ color: COLORS.primaryGreen }}><strong>Role:</strong> {role}</p>
    <p style={{ color: status === 'Approved' ? COLORS.primaryGreen : COLORS.warmCoral }}><strong>Status:</strong> {status}</p>
  </div>
);

export default MemberCard;
