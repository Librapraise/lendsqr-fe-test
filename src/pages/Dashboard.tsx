import React, { useState, useRef, useEffect } from 'react';
import '../styles/DashboardPage.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'; 
import FilterCard from '../components/FilterCard'; 
import UserActions from '../components/UserAction';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';



const DashboardPage: React.FC = () => {

  const [showFilter, setShowFilter] = useState(false);

  const [activeActionIndex, setActiveActionIndex] = useState<number | null>(null);
  const actionRef = useRef<HTMLDivElement | null>(null);

  const handleToggleClick = (index: number) => {
    setActiveActionIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
        setActiveActionIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <div className="users-page">
      <Navbar /> 
      <Sidebar />
      <div className="content-area">

        <main className="users-main">
          <h1 className="page-title">Users</h1>

          <div className="stats-cards">
            <div className="card">
              <div className="icon pink">👤</div>
              <p>USERS</p>
              <h3>2,453</h3>
            </div>
            <div className="card">
              <div className="icon purple">🟣</div>
              <p>ACTIVE USERS</p>
              <h3>2,453</h3>
            </div>
            <div className="card">
              <div className="icon peach">📄</div>
              <p>USERS WITH LOANS</p>
              <h3>12,453</h3>
            </div>
            <div className="card">
              <div className="icon red">💰</div>
              <p>USERS WITH SAVINGS</p>
              <h3>102,453</h3>
            </div>
          </div>

          {showFilter && (
            <div className="filter-card-container">
              <FilterCard />
            </div>
          )}

            <div className="user-table-container">
            <table className="user-table">
              <thead>
              <tr>
                <th>
                  <span>ORGANIZATION</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th>
                  <span>USERNAME</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th>
                  <span>EMAIL</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th>
                  <span>PHONE NUMBER</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th> 
                  <span>DATE JOINED</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th>
                  <span>STATUS</span>
                  <IoFilterSharp
                    className="icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {[
                ['Lendsqr', 'Adedeji', 'adedeji@lendsqr.com', '08078903721', 'May 15, 2020 10:00 AM', 'Inactive'],
                ['Irorun', 'Debby Ogana', 'debby2@irorun.com', '08160780928', 'Apr 30, 2020 10:00 AM', 'Pending'],
                ['Lendstar', 'Grace Effiom', 'grace@lendsqr.com', '07060780922', 'Apr 30, 2020 10:00 AM', 'Blacklisted'],
                ['Lendsqr', 'Tosin Dokunmu', 'tosin@lendsqr.com', '07003039226', 'Apr 10, 2020 10:00 AM', 'Pending'],
                ['Lendstar', 'Grace Effiom', 'grace@lendsqr.com', '07060780922', 'Apr 30, 2020 10:00 AM', 'Active'],
                ['Lendsqr', 'Tosin Dokunmu', 'tosin@lendsqr.com', '08060780900', 'Apr 10, 2020 10:00 AM', 'Active'],
                ['Lendstar', 'Grace Effiom', 'grace@lendsqr.com', '07060780922', 'Apr 30, 2020 10:00 AM', 'Blacklisted'],
                ['Lendsqr', 'Tosin Dokunmu', 'tosin@lendsqr.com', '08060780900', 'Apr 10, 2020 10:00 AM', 'Inactive'],
                ['Lendstar', 'Grace Effiom', 'grace@lendsqr.com', '07060780922', 'Apr 30, 2020 10:00 AM', 'Inactive'],
              ].map(([org, name, email, phone, date, status], idx) => (
                <tr key={idx}>
                <td>{org}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{date}</td>
                <td>
                  <span className={`status ${status.toLowerCase()}`}>{status}</span>
                </td>
                <td className="toggle-cell">
                  <span onClick={() => handleToggleClick(idx)} style={{ cursor: 'pointer' }}>⋮</span>
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
                <select>
                  <option value="100">100</option>
                  <option value="50">50</option>
                  <option value="20">20</option>
                  <option value="10">10</option>
                </select>
                <span>out of 100</span>
              </div>

              <div className="page-controls">
              <span><FaArrowLeft /></span>
              <span className="page active">1</span>
              <span className="page">2</span>
              <span className="page">3</span>
              <span>...</span>
              <span className="page">15</span>
              <span className="page">16</span>
              <span><FaArrowRight/></span>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
