import React, { useState, useRef, useEffect } from 'react';
import '../styles/DashboardPage.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FilterCard from '../components/FilterCard';
import UserActions from '../components/UserAction';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const DashboardPage: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [activeActionIndex, setActiveActionIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const actionRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users.json');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (actionRef.current && !actionRef.current.contains(event.target as Node)) {
        setActiveActionIndex(null);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleClick = (index: number) => {
    setActiveActionIndex(prev => (prev === index ? null : index));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = (totalPages: number, currentPage: number): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  const applyFilters = () => {
    const filtered = users.filter(user => {
      return (
        (filters.organization === '' || user.organization === filters.organization) &&
        (filters.username === '' || user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (filters.email === '' || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (filters.phone === '' || user.phoneNumber.includes(filters.phone)) &&
        (filters.date === '' || new Date(user.dateJoined).toLocaleDateString() === new Date(filters.date).toLocaleDateString()) &&
        (filters.status === '' || user.status.toLowerCase() === filters.status.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="users-page">
      <Navbar />
      <Sidebar />
      <div className="content-area">
        <main className="users-main">
          <h1 className="page-title">Users</h1>

          <div className="stats-cards">
            {[{ img: 'users.png', title: 'USERS', count: '2,453', class: 'pink' },
              { img: 'active.png', title: 'ACTIVE USERS', count: '2,453', class: 'purple' },
              { img: 'loans.png', title: 'USERS WITH LOANS', count: '12,453', class: 'peach' },
              { img: 'savings.png', title: 'USERS WITH SAVINGS', count: '102,453', class: 'red' }
            ].map(({ img, title, count, class: color }, idx) => (
              <div className="card" key={idx}>
                <div className={`icon ${color}`}>
                  <img className="icon-card" src={`./src/assets/${img}`} alt={title} />
                </div>
                <p>{title}</p>
                <h3>{count}</h3>
              </div>
            ))}
          </div>

          {showFilter && (
            <div className="filter-card-container" ref={filterRef}>
              <FilterCard
                filters={filters}
                setFilters={setFilters}
                onReset={() => {
                  setFilters({ organization: '', username: '', email: '', date: '', phone: '', status: '' });
                  setFilteredUsers(users);
                }}
                onApply={applyFilters}
              />
            </div>
          )}

          <div className="user-table-container">
            <table className="user-table">
              <thead>
                <tr>
                  {["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"].map((title) => (
                    <th key={title}>
                      <span>{title}</span>
                      <IoFilterSharp
                        className="icon"
                        onClick={() => setShowFilter(prev => !prev)}
                        style={{ cursor: 'pointer' }}
                      />
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, idx) => (
                  <tr key={user.id}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{new Date(user.dateJoined).toLocaleString()}</td>
                    <td>
                      <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                    </td>
                    <td className="toggle-cell">
                      <span
                        onClick={() => {
                          localStorage.setItem('selectedUser', JSON.stringify(user));
                          navigate(`/users/${user.id}`);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        ⋮
                      </span>
                      {activeActionIndex === idx && (
                        <div ref={actionRef}>
                          <UserActions />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <div className="page-info">
              <span>Showing</span>
              <select value={usersPerPage} disabled>
                <option value="10">10</option>
              </select>
              <span>out of {filteredUsers.length}</span>
            </div>

            <div className="page-controls">
              <span className={`arrow ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => changePage(currentPage - 1)}>
                <FaArrowLeft />
              </span>
              {getVisiblePages(totalPages, currentPage).map((item, idx) =>
                item === '...'
                  ? <span key={`dots-${idx}`} className="dots">...</span>
                  : <span
                      key={item}
                      className={`page ${currentPage === item ? 'active' : ''}`}
                      onClick={() => changePage(Number(item))}
                    >{item}</span>
              )}
              <span className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`} onClick={() => changePage(currentPage + 1)}>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;