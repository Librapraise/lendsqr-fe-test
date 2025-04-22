import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdOutlineBlock, MdPersonAddAlt } from 'react-icons/md';
import './UserAction.scss';

const UserActions: React.FC = () => {
  return (
    <div className="user-actions">
      <div className="action">
        <FaEye className="icon" />
        <span>View Details</span>
      </div>
      <div className="action">
        <MdOutlineBlock className="icon" />
        <span>Blacklist User</span>
      </div>
      <div className="action">
        <MdPersonAddAlt className="icon" />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default UserActions;
