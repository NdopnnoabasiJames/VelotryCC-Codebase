
interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

import React from 'react';
import { COLORS } from '../styles/colors';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    style={{
      background: COLORS.softGray,
      border: `2px solid ${COLORS.deepNavy}`,
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}
  >
    <h3 style={{ color: COLORS.deepNavy, marginBottom: '1.5rem' }}>{title}</h3>
    {children}
  </form>
);

export default Form;
