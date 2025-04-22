import React from 'react';
import '../styles/UserDetailsPage.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaArrowLeftLong } from 'react-icons/fa6';

const UserDetails: React.FC = () => {
  return (
    <div className="user-details-page">
        <Navbar />
      <Sidebar />
      <main className="user-details-main">

        <div className="user-details-container">
            {/* Top Header */}
            <div className="top-header">
                <div className="left">
                    <div className="back-link">
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

            {/* User Details Card */}
            <div className="user-details-card">

          {/* HEADER CARD */}
            <div className="user-details-header">
                <div className="user-info">
                    <div className="avatar">👤</div>
                    <div>
                    <h2>Grace Effiom</h2>
                    <p>LSQFf587g90</p>
                    </div>
                </div>

                <div className="user-tier">
                    <span>User’s Tier</span>
                    <div className="stars">⭐ ☆ ☆</div>
                </div>

                <div className="account-info">
                    <h3>₦200,000.00</h3>
                    <p>9912345678 / Providus Bank</p>
                </div>
            </div>


          {/* TABS */}
          <div className="tabs">
            <button className="active">General Details</button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        </div>

          {/* DETAILS SECTIONS */}
          <div className="user-sections">
            <section>
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div>
                  <strong>Full Name</strong>
                  Grace Effiom
                </div>
                <div>
                  <strong>Phone Number</strong>
                  07060780922
                </div>
                <div>
                  <strong>Email Address</strong>
                  grace@gmail.com
                </div>
                <div>
                  <strong>BVN</strong>
                  07060780922
                </div>
                <div>
                  <strong>Gender</strong>
                  Female
                </div>
                <div>
                  <strong>Marital Status</strong>
                  Single
                </div>
                <div>
                  <strong>Children</strong>
                  None
                </div>
                <div>
                  <strong>Type of Residence</strong>
                  Parent's Apartment
                </div>
              </div>
            </section>

            <section>
              <h3>Education and Employment</h3>
              <div className="info-grid">
                <div>
                  <strong>Level of Education</strong>
                  B.Sc
                </div>
                <div>
                  <strong>Employment Status</strong>
                  Employed
                </div>
                <div>
                  <strong>Sector of Employment</strong>
                  FinTech
                </div>
                <div>
                  <strong>Duration of Employment</strong>
                  2 years
                </div>
                <div>
                  <strong>Office Email</strong>
                  grace@lendsqr.com
                </div>
                <div>
                  <strong>Monthly Income</strong>
                  ₦200,000.00 - ₦400,000.00
                </div>
                <div>
                  <strong>Loan Repayment</strong>
                  40,000
                </div>
              </div>
            </section>

            <section>
              <h3>Socials</h3>
              <div className="info-grid">
                <div>
                  <strong>Twitter</strong>
                  @grace_effiom
                </div>
                <div>
                  <strong>Facebook</strong>
                  Grace Effiom
                </div>
                <div>
                  <strong>Instagram</strong>
                  @grace_effiom
                </div>
              </div>
            </section>

            <section>
              <h3>Guarantor</h3>

              <div className="info-grid">
                <div>
                  <strong>Full Name</strong>
                  Debby Ogana
                </div>
                <div>
                  <strong>Phone Number</strong>
                  07060780922
                </div>
                <div>
                  <strong>Email Address</strong>
                  debby@gmail.com
                </div>
                <div>
                  <strong>Relationship</strong>
                  Sister
                </div>
              </div>

            </section>

            <section>
                <h3>Next of Kin</h3>
                <div className="info-grid">
                    <div>
                        <strong>Full Name</strong>
                        Debby Ogana
                    </div>
                    <div>
                        <strong>Phone Number</strong>
                        07060780922
                    </div>
                    <div>
                        <strong>Email Address</strong>
                        debby@gmail.com
                    </div>
                    <div>
                        <strong>Relationship</strong>
                        Sister
                    </div>
                </div>    

            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetails;
