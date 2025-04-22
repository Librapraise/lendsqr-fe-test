
import "./FilterCard.scss";
import { FiChevronDown, FiCalendar } from "react-icons/fi";

const FilterCard = () => {
  return (
    <div className="filter-card">
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <div className="input-wrapper select">
          <select id="organization">
            <option>Select</option>
          </select>
          <FiChevronDown className="icon" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="User" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <div className="input-wrapper date">
          <input type="date" id="date" placeholder="Date" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Phone Number" />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <div className="input-wrapper select">
          <select id="status">
            <option>Select</option>
          </select>
          <FiChevronDown className="icon" />
        </div>
      </div>

      <div className="button-group">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default FilterCard;
