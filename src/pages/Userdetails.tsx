import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/UserDetailsPage.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaArrowLeftLong } from 'react-icons/fa6';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  accountNumber: string;
  organization: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
  education: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  incomeRange: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<User[]>('/mock_users.json'); 
        const found = res.data.find((u) => String(u.id) === id);
        setUser(found || null);
      } catch (error) {
        console.error('Error loading user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div className="loading">Loading user details...</div>;

  return (
    <div className="user-details-page">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="user-details-main">
        <div className="user-details-container">
          <div className="top-header">
            <div className="left">
              <div className="back-link" onClick={() => navigate('/dashboard')}>
                <FaArrowLeftLong className="arrow-icon" />
                <span>Back to Users</span>
              </div>
              <h2>User Details</h2>
            </div>
            <div className="action-buttons">
              <button className="blacklist-btn">Blacklist User</button>
              <button className="activate-btn">Activate User</button>
            </div>
          </div>

          {/* Details Card */}
          <div className="user-details-card">
            <div className="user-details-header">
              <div className="user-info">
                <div className="avatar">👤</div>
                <div>
                  <h2>{user.username}</h2>
                  <p>{user.accountNumber}</p>
                </div>
              </div>
              <div className="user-tier">
                <span>User’s Tier</span>
                <div className="stars">⭐ ☆ ☆</div>
              </div>
              <div className="account-info">
                <h3>₦200,000.00</h3>
                <p>{user.accountNumber} / Providus Bank</p>
              </div>
            </div>

            <div className="tabs">
              <button className="active">General Details</button>
              <button>Documents</button>
              <button>Bank Details</button>
              <button>Loans</button>
              <button>Savings</button>
              <button>App and System</button>
            </div>
          </div>

          {/* Sections */}
          <div className="user-sections">
            <section>
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div><strong>Full Name</strong>{user.username}</div>
                <div><strong>Phone Number</strong>{user.phoneNumber}</div>
                <div><strong>Email Address</strong>{user.email}</div>
                <div><strong>BVN</strong>{user.bvn}</div>
                <div><strong>Gender</strong>{user.gender}</div>
                <div><strong>Marital Status</strong>{user.maritalStatus}</div>
                <div><strong>Children</strong>{user.children}</div>
                <div><strong>Type of Residence</strong>{user.residence}</div>
              </div>
            </section>

            <section>
              <h3>Education and Employment</h3>
              <div className="info-grid">
                <div><strong>Level of Education</strong>{user.education}</div>
                <div><strong>Employment Status</strong>{user.employmentStatus}</div>
                <div><strong>Sector of Employment</strong>{user.employmentSector}</div>
                <div><strong>Duration of Employment</strong>{user.employmentDuration}</div>
                <div><strong>Office Email</strong>{user.officeEmail}</div>
                <div><strong>Monthly Income</strong>{user.incomeRange}</div>
                <div><strong>Loan Repayment</strong>{user.loanRepayment}</div>
              </div>
            </section>

            <section>
              <h3>Socials</h3>
              <div className="info-grid">
                <div><strong>Twitter</strong>{user.twitter}</div>
                <div><strong>Facebook</strong>{user.facebook}</div>
                <div><strong>Instagram</strong>{user.instagram}</div>
              </div>
            </section>

            <section>
              <h3>Guarantor</h3>
              <div className="info-grid">
                <div><strong>Full Name</strong>{user.guarantor?.fullName}</div>
                <div><strong>Phone Number</strong>{user.guarantor?.phoneNumber}</div>
                <div><strong>Email Address</strong>{user.guarantor?.email}</div>
                <div><strong>Relationship</strong>{user.guarantor?.relationship}</div>
              </div>
            </section>

            <section>
              <h3>Next of Kin</h3>
              <div className="info-grid">
                <div><strong>Full Name</strong>{user.guarantor?.fullName}</div>
                <div><strong>Phone Number</strong>{user.guarantor?.phoneNumber}</div>
                <div><strong>Email Address</strong>{user.guarantor?.email}</div>
                <div><strong>Relationship</strong>{user.guarantor?.relationship}</div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetails;
