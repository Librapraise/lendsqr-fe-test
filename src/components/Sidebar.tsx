import React from 'react';
import './Sidebar.scss';
import {
  FaUserFriends,
  FaUserCheck,
  FaMoneyBill,
  FaBriefcase,
  FaPiggyBank,
  FaClipboardList,
  FaCoins,
  FaCogs,
  FaFileInvoiceDollar,
  FaExchangeAlt,
  FaChartBar,
  FaWrench,
  FaUserShield,
  FaClipboard,
  FaSignOutAlt,
  FaTachometerAlt,
  FaChevronDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Sidebar: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear storage/session data
    localStorage.clear();
    sessionStorage.clear();

    // Optional: toast or log
    console.log("User logged out.");

    // Redirect to login
    navigate('/');
  };


  return (
    <aside className="sidebar">
      <div className="org-switcher">
        <FaBriefcase className="icon" />
        <p>Switch Organization</p>
        <FaChevronDown className="chevron-icon" />
      </div>

      <ul className="nav-group">
        <li className="nav-item dashboard">
          <FaTachometerAlt className="icon" />
          <span>Dashboard</span>
        </li>
      </ul>

      <nav className="nav-section">
        <p className="section-title">CUSTOMERS</p>
        <ul className="nav-group">
          <li className="nav-item active"><FaUserFriends className="icon" /> <span>Users</span></li>
          <li className="nav-item"><FaUserCheck className="icon" /> <span>Guarantors</span></li>
          <li className="nav-item"><FaMoneyBill className="icon" /> <span>Loans</span></li>
          <li className="nav-item"><FaClipboardList className="icon" /> <span>Decision Models</span></li>
          <li className="nav-item"><FaPiggyBank className="icon" /> <span>Savings</span></li>
          <li className="nav-item"><FaBriefcase className="icon" /> <span>Loan Requests</span></li>
          <li className="nav-item"><FaUserShield className="icon" /> <span>Whitelist</span></li>
          <li className="nav-item"><FaClipboard className="icon" /> <span>Karma</span></li>
        </ul>

        <p className="section-title">BUSINESSES</p>
        <ul className="nav-group">
          <li className="nav-item"><FaBriefcase className="icon" /> <span>Organization</span></li>
          <li className="nav-item"><FaMoneyBill className="icon" /> <span>Loan Products</span></li>
          <li className="nav-item"><FaPiggyBank className="icon" /> <span>Savings Products</span></li>
          <li className="nav-item"><FaFileInvoiceDollar className="icon" /> <span>Fees and Charges</span></li>
          <li className="nav-item"><FaExchangeAlt className="icon" /> <span>Transactions</span></li>
          <li className="nav-item"><FaWrench className="icon" /> <span>Services</span></li>
          <li className="nav-item"><FaUserShield className="icon" /> <span>Service Account</span></li>
          <li className="nav-item"><FaCoins className="icon" /> <span>Settlements</span></li>
          <li className="nav-item"><FaChartBar className="icon" /> <span>Reports</span></li>
        </ul>

        <p className="section-title">SETTINGS</p>
        <ul className="nav-group">
          <li className="nav-item"><FaCogs className="icon" /> <span>Preferences</span></li>
          <li className="nav-item"><FaFileInvoiceDollar className="icon" /> <span>Fees and Pricing</span></li>
          <li className="nav-item"><FaClipboardList className="icon" /> <span>Audit Logs</span></li>
          <li className="nav-item"><FaClipboard className="icon" /> <span>System Messages</span></li>
        </ul>
      </nav>

      <hr className="divider" />

      <div className="logout-section">
        <FaSignOutAlt className="icon logout-icon" />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className='footer'>
        <p>v1.2.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
