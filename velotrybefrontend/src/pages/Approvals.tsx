import React, { useEffect, useState } from 'react';
import { COLORS } from '../styles/colors';
import MemberCard from '../components/MemberCard';
import api from '../utils/api';

interface Member {
  id: string;
  name: string;
  role: string;
  status: string;
}

const Approvals: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
  const res = await api.get<Member[]>('/user/pending');
  setMembers(res.data);
    } catch (err: any) {
      setError('Failed to fetch members');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await api.post(`/user/approve/${id}`);
      setMembers(members => members.map(m => m.id === id ? { ...m, status: 'Approved' } : m));
    } catch {
      setError('Approval failed');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await api.post(`/user/reject/${id}`);
      setMembers(members => members.map(m => m.id === id ? { ...m, status: 'Rejected' } : m));
    } catch {
      setError('Rejection failed');
    }
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: COLORS.softGray, minHeight: '40vh', borderRadius: '12px', padding: '2rem' }}
    >
      <h2 style={{ color: COLORS.sunnyYellow }}>Member Approvals</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: COLORS.warmCoral }}>{error}</div>}
      {members.map((member) => (
        <div key={member.id} style={{ position: 'relative' }}>
          <MemberCard name={member.name} role={member.role} status={member.status} />
          {member.status === 'Pending' && (
            <div style={{ position: 'absolute', top: 20, right: 20 }}>
              <button className="btn btn-success btn-sm me-2" onClick={() => handleApprove(member.id)}>Approve</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleReject(member.id)}>Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Approvals;
